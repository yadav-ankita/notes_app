import React, { useState } from 'react'
import { Link,Navigate } from 'react-router-dom'
import { useGlobalContext } from '../../context/AppContext'
const Signup = () => {
     const {user,register}=useGlobalContext()
     const Form = {
          name: '',
          email: '',
          password: ''
     }
     const [form, setForm] = useState(Form);
     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(form);
          const { name, email, password } = form;
          register({ name, email, password });
     }
     return (
         <>
               {user && <Navigate to='/User' />}
               <div className='flex  justify-center items-center min-h-screen bg-gray-100'>
               <div className='border shadow-md p-6 w-80 bg-white rounded-sm'>
                    <h1 className='text-2xl font-bold mb-4'>Signup</h1>
                    <form onSubmit={handleSubmit}>
                         <div className='mb-4'>
                              <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                              <input className='w-full px-3 py-2 border rounded-sm focus:outline-none' type='text' placeholder='Enter Username' onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                         </div>
                         <div className='mb-4'>
                              <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                              <input type='email' className='w-full px-3 py-2 border rounded-sm focus:outline-none' placeholder='Enter Email' onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                         </div>
                         <div className='mb-4'>
                              <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                              <input type='password' className='w-full px-3 py-2 border rounded-sm focus:outline-none' placeholder='Enter Password' onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                         </div>
                         <button type='submit' className='w-full text-white py-2 rounded bg-blue-500 hover:bg-blue-700'>
                              Signup
                         </button>
                    </form>
                    <p className='align-baseline font-medium mt-4 text-md text-center'>Already Have an Account?<Link to="/Login"><span className='text-blue-500 hover:text-blue-700 cursor-pointer ml-2'>Login</span></Link></p>
               </div>
          </div>
         </>
         

     )
}

export default Signup
