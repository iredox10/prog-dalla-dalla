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
    likes:{
        type: Number,
    },
    category: String,
    twitter: String,
    facebook: String,
    webLink: String,
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
},{timestamps:true})

const Blog = mongoose.model('blog', blog)

export default Blog