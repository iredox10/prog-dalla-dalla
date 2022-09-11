import mongoose from 'mongoose'

const comment = new mongoose.Schema({
    comment:{
        type:String,
        required: true,
    },
    replies: Array,
    blog: {
        type: mongoose.Schema.Types.Object,
        refs: 'blog'
    }
},{timestamps: true})

const Comment = mongoose.model('comment', comment)

export default Comment