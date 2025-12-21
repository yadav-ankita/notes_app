const Note = require('../model/Note')
const { BadRequestError, NotFoundError } = require('../error')
const { StatusCodes } = require('http-status-codes')
const getAllNotes = async (req, res) => {
    //console.log("req.user.userId is this",req.user.userId)
    const notes = await Note.find({ createdBy: req.user.userId }).sort('createdOn')
    res.status(StatusCodes.OK).json({notes})
}
const createNote = async (req, res) => {
    req.body.createdBy = req.user.userId; 
    const note = await Note.create(req.body)
    res.status(StatusCodes.CREATED).json({ note })
}
const getNote= async(req,res)=>{
  const {
    user: { userId },
    params: { id: NoteId },
  } = req
const note = await Note.findOne({
    _id: NoteId,
    createdBy: userId,
  })
  if (!note) {
    throw new NotFoundError(`No note with id ${NoteId}`)
  }
  res.status(StatusCodes.OK).json({note})

}
const updateNote = async (req, res) => {
    const { title, content } = req.body;
    const { userId } = req.user;
    const { id: NoteId } = req.params;
    if (title === '' || content === '') {
        throw new BadRequestError('title or content fields cannot be empty')
    }
    const newNote = await Note.findByIdAndUpdate(
        { _id: NoteId, createdBy: userId },
        req.body,
        { new: true, runValidators: true }
    )
    if (!newNote) { 
        throw new NotFoundError(`No Notes with id ${NoteId}`)
    }
    res.status(StatusCodes.OK).json({ newNote, msg: 'Success! Note updated.' })
}
const deleteNote = async (req, res) => {
    const { id: NoteId } = req.params;
    const { userId } = req.user;
    const deleteNote = await Note.findByIdAndDelete(
        { _id: NoteId, createdBy: userId}
    )
    if (!deleteNote) {
        throw new NotFoundError(`No Notes with id ${NoteId}`)
    }
    res.status(StatusCodes.OK).json({ deleteNote, msg: 'Success! Note removed.' })
}
module.exports = { getAllNotes, createNote, updateNote, deleteNote,getNote}
