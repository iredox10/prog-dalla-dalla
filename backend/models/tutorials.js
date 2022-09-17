import mongoose from 'mongoose'

const tutorial = new mongoose.Schema({
    subject:{
        type: String,
    },
    topics:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topic'
    }]
})

const Tutorial = mongoose.model('tutorial', tutorial)

export default Tutorial