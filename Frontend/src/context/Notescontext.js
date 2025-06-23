import { createContext,useContext,useReducer} from "react";
import { NotesReducer } from "../reducers/NotesReducer";
const NotesContext=createContext();
const NotesProvider=({children})=>{
const initialState={
    title:'',
    text:'',
    notes:[],
    archive:[],
    deleted:[]
}
 const [{title,text,notes,archive,deleted}, Notesdispatch] = useReducer(NotesReducer, initialState)
    return(
        <NotesContext.Provider value={{title,text,notes,archive,deleted,Notesdispatch}}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes=()=>useContext(NotesContext);
export  {useNotes,NotesProvider};









