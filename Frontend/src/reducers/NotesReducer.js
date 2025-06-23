import { v4 as uuidv4 } from 'uuid';
export const NotesReducer=(state,action)=>{
    console.log('states in reducers is',state);
    console.log('...state archive is ',...state.archive)
    console.log('states note is',state.notes)
    console.log('...state.notes is',...state.notes);
    console.log('action in reducers is ',action);
    console.log('archive is in reducer',state.archive);
    console.log('deleted is in reducer is ',state.deleted);
    switch (action.type) {
        case 'ADD_TO_NOTES':
            return{
                 ...state,
                 notes:[...state.notes,{title:state.title,text:state.text,id:uuidv4(),isPinned:false}]
            }
            case 'ADD_TO_TITLE':
            return{
                  ...state,
                  title:action.payload
            }
            case 'ADD_TO_TEXT':
            return{
                  ...state,
                  text:action.payload
            }
            case 'ADD_TO_ARCHIVE':
                return{
                    ...state,
                    archive:[...state.archive,state.notes.find(val=>val.id===action.payload)],
                    notes:state.notes.filter(val=>val.id!==action.payload)
                }
              case 'ADD_TO_BIN':
                return{
                    ...state,
                    deleted:[...state.deleted,state.notes.find(val=>val.id===action.payload)],
                    notes:state.notes.filter(val=>val.id!==action.payload)

                }
                case 'ADD_TO_UNARCHIVE':
                    const obj=state.archive.find(val=>val.id===action.payload)
                    return{
                        ...state,
                        archive:state.archive.filter(val=>val.id!==action.payload),
                        notes:[...state.notes,obj]
                    }
        default:
            return{
                ...state,
            }
    }
}






