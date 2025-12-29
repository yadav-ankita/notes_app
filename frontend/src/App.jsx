import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Privateroute from './components/Privateroute'

const App = () => {
  return (
   <>
    <Routes>
       <Route  path='/' element={<Home/>}></Route>
       <Route path='/User' element={
        <Privateroute><Dashboard/></Privateroute>
         }></Route>
       <Route   path='/Login' element={<Login/>} ></Route>
       <Route   path='/Signup' element={<Signup/>} ></Route>     
    </Routes>  
   </>
  )
}
export default App
