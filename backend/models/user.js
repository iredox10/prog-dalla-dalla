import mongoose from 'mongoose'

const blog = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        
    },
    profilePic: String,
    favourites:{
        type: mongoose.Types.ObjectId,
        ref: 'blog'
    }
})

const Blog = mongoose.model('blog', blog)

export default Blog