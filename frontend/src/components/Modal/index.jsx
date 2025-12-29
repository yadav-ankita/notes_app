import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/AppContext'
const Modal = ({ closeModal, currentNote }) => {
    const { createnote, editnote } = useGlobalContext()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentNote) {
             editnote(currentNote._id, { title, content: description })
        }
        else{
                createnote({ title, content: description })
        }
        closeModal()
    }
    
    useEffect(()=>{
        if(currentNote){
            setTitle(currentNote.title);
            setDescription(currentNote.content);
        } else{
            setTitle('');
            setDescription('');
        }
    },[currentNote])
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 ">
            <div className="bg-white/80 backdrop-blur-md w-full max-w-md rounded-2xl shadow-2xl p-6 relative border border-white/30">
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {currentNote ? 'Edit Note' : 'Add New Note'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Note Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <textarea
                        rows="4"
                        placeholder="Note Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-white/70 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition"
                    >
                       {currentNote ? 'Update Note' : 'Create Note'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal
