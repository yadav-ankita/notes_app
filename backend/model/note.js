const mongoose=require('mongoose')
const NotesSchema=new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Please provide Title'],

    },
    content:{
        type:String,
        required: [true, 'Please provide Some Content'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    createdOn:{
        type:Date,
        default:new Date().getTime()
    }
})       
module.exports=mongoose.model('Note',NotesSchema);
