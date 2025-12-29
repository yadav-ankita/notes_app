const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
            }
        case 'REGISTER_USER_ERROR':
            return {
                ...state,
                user: null,
            }
        case 'FETCH_NOTES_SUCCESS':
            return {
                ...state,
                notes: action.payload,
            }
        case 'FETCH_NOTES_ERROR':
            return {
                ...state,
            }
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload,
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                user: null,
                notes: [],
            }
        case 'CREATE_NOTE_SUCCESS':
            return {
                ...state,
                notes: [...state.notes, action.payload],
            }
        case 'CREATE_NOTE_ERROR':
            return{
                  ...state
            }
        case 'EDIT_NOTE_SUCCESS':
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note._id === action.payload._id ? action.payload : note
                ),
            }
            case 'EDIT_NOTE_ERROR':
                return {
                    ...state,
                }
        default:
            return state;
    }
}
export default reducer;