import mongoose from 'mongoose'

const topic = mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    markdown:{
        type: String,
        required: true,
    },
    tut:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutorial'
    }
})

const Topic = mongoose.model('topic',topic)

export default Topic