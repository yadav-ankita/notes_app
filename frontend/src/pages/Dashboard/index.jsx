import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Modal from '../../components/Modal'
import { useGlobalContext } from '../../context/AppContext'
import NotesCard from '../../components/NotesCard'

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentNote, setCurrentNote] = useState(null)
  const { fetchnotes, notes} = useGlobalContext()
  const { search } = useGlobalContext()
  
  const onEdit=(note)=>{
      setCurrentNote(note);
      setIsModalOpen(true);
  }

  useEffect(() => {
    fetchnotes()
  }, [])

  return (
    <> 
      <div className="bg-gray-100 min-h-screen px-6 py-6">
        {/* Notes Grid */}
        {(notes?.length > 0) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes
              .filter((note) => {
                if (!search || search.trim() === '') return true
                const q = search.toLowerCase()
                return (
                  (note.title || '').toLowerCase().includes(q) ||
                  (note.content || '').toLowerCase().includes(q)
                )
              })
              .map((note) => (
                <NotesCard key={note._id} 
                  note={note} 
                  onEdit={onEdit}
                />
              ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-20">
            No notes found. Click + to add a new note.
          </p>
        )}

        {/* Floating Add Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed right-6 bottom-6 bg-teal-500 hover:bg-teal-600 text-white w-14 h-14 rounded-full text-3xl flex items-center justify-center shadow-lg transition"
        >
          +
        </button>
        {/* Modal */}
        {isModalOpen && <Modal 
             closeModal={() => setIsModalOpen(false)} 
             currentNote={currentNote}
          />}
      </div>
    </>
  )
}

export default Dashboard
