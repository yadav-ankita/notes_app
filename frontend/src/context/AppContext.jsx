import axios from 'axios'
import '../axios'
import { useContext, useEffect, useReducer, createContext,useState } from 'react'
import reducer from './reducers';

const initialState = {
  user: null,
  notes: [],
  search: '',
}

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // register
  const register = async ({ name, email, password }) => {
    try {
      const { data } = await axios.post
        (`/auth/signup`,
          {
            name: name, email: email, password: password
          })
      dispatch({ type: 'REGISTER_USER_SUCCESS', payload: data.user.name })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: 'REGISTER_USER_ERROR' })
    }
  }

  // login
  const login = async ({ email, password }) => {
    try {
      const { data } = await axios.post(`/auth/login`,
        {
          email: email, password: password
        })
      dispatch({ type: 'REGISTER_USER_SUCCESS', payload: data.user.name })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.name, token: data.token })
      )
    } catch (error) {
      dispatch({ type: 'REGISTER_USER_ERROR' })
    }
  }
  // logout
  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT_USER' })
  }
  // fetch notes
  const fetchnotes = async () => {
    try {
      const { data } = await axios.get(`/notes/`)
      console.log("data we get from fetchnotes api",data);
      dispatch({ type: 'FETCH_NOTES_SUCCESS', payload: data.notes })
    } catch (error) {
      dispatch({ type: 'FETCH_NOTES_ERROR' })
      logout()
    }
  }
  // set search query
  const setSearch = (query) => {
    dispatch({ type: 'SET_SEARCH', payload: query })
  }
   // create note
   const createnote = async (userInput) => {
    try {
      const { data } = await axios.post(`/notes/`, {
        ...userInput,
      })
    dispatch({ type: 'CREATE_NOTE_SUCCESS', payload: data.note })
    } catch (error) {
      dispatch({ type: 'CREATE_NOTE_ERROR' })
    }
  }
  const editnote = async (noteId,{title,content}) => {
    try {
      const { data } = await axios.patch(`/notes/${noteId}`, {
         title, content
      })
      console.log("data we get from edit note api",data);
      dispatch({ type: 'EDIT_NOTE_SUCCESS', payload: data.newNote })
    } catch (error) {
      dispatch({ type: 'EDIT_NOTE_ERROR' })
    }
  }
  //delete note
  const deletenote = async (noteId) => {
    try {
      await axios.delete(`/notes/${noteId}`)
      fetchnotes()
    } catch (error) {
      dispatch({ type: 'DELETE_NOTE_ERROR' })
    }
  }
  
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const newUser = JSON.parse(user)
      dispatch({ type: 'SET_USER', payload: newUser.name })
    }
  }, [])
  return (
    <AppContext.Provider
      value={
        {
          ...state,
          register,
          login,
          logout,
          fetchnotes,
          createnote,
          editnote,
          deletenote,
          setSearch,
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(AppContext)
}
export { useGlobalContext, AppProvider }
