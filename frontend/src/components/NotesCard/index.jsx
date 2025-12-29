import React from 'react'
import { useGlobalContext } from '../../context/AppContext'
const NotesCard = ({ note, onEdit }) => {
  const { deletenote } = useGlobalContext();
  const handleDelete = (noteId) => {
    deletenote(noteId);
  }
  const handleEdit = (note) => {
      onEdit(note);
  }
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300">
     <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
        {note.title || 'Untitled Note'}
      </h2>

      {/* Content */}
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
        {note.content || 'No description available'}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>
          {new Date(note.createdOn).toLocaleDateString()}
        </span>

        <div className="flex gap-3">
          <button
            onClick={() => handleEdit(note)}
            className="text-blue-500 hover:text-blue-600 font-medium">
            Edit
          </button>
          <button
            onClick={() => handleDelete(note._id)}
            className="text-red-500 hover:text-red-600 font-medium">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotesCard
