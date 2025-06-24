const express=require('express')

const router=express.Router();

const 
{   createNote,
    deleteNote,
    getAllNotes,
    updateNote,
}=
require('../controller/notes');

router.route("/").post(createNote).get(getAllNotes)
router.route("/:id").delete(deleteNote).patch(updateNote);

module.exports=router; 