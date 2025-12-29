import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/AppContext'

const Navbar = () => {
  const { logout, user, setSearch } = useGlobalContext()
  const handleSearch = (e) => {
    const input = e.target.value || ''
    setSearch(input.toLowerCase())
  }
  return (
    <nav className="bg-gray-900 px-6 py-4 text-white flex items-center justify-between shadow-md">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-teal-400">
        NoteApp
      </Link>

      {/* Search */}
      <input
       onChange={handleSearch}
        type="text"
        placeholder="Search notes..."
        className="hidden md:block px-4 py-2 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      {/* Auth Section */}
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-300 hidden sm:block">
              Hi, <span className="font-semibold">{user}</span>
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
