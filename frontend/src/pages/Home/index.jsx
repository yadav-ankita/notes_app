import React,{useEffect}from 'react'
import Navbar from '../../components/Navbar'
import { useGlobalContext } from '../../context/AppContext';
import { Navigate } from 'react-router';
const Home = () => {
  const {user}=useGlobalContext();
  return (
    <div>
            {user && <Navigate to='/User'/>}         
    </div>
  )
}

export default Home
