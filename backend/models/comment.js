import mongoose from 'mongoose'

const blog = new mongoose.Schema({
    comment:{
        type:String,
        required: true,
    },
    replies: Array
})

const Comment = mongoose.model('comment', comment)

export default Comment