import mongoose from 'mongoose'

const blog = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    markdown:{
        type: String,
        required: true,
    },
    like:{
        type: Boolean,
        default: false
    },
    likes:{
        type: Number,
        default: 0,
        max: 1
    },
    categories: Array
    comments:{
        type: mongoose.Types.ObjectId,
        ref: 'comment'
    }
})

const Blog = mongoose.model('blog', blog)

export default Blog