import Tutorial from '../models/tutorials.js'
import Topic from '../models/topic.js'

export const add_tut = async (req,res,next) =>{
     try{
        const tut = await Tutorial.create(req.body)
        res.status(201).json(tut)
     }
     catch(err){
     res.json(err)
    }
}

export const get_tuts = async (req,res,next) =>{
     try{
        const tuts = await Tutorial.find()
        res.status(200).json(tuts)
     }
     catch(err){
     res.json(err)
    }
}
export const get_tut = async (req,res,next) =>{
     try{
        const tuts = await Tutorial.findById(req.params.id)
        res.status(200).json(tuts)
     }
     catch(err){
     res.json(err)
    }
}

export const add_topic = async (req,res,next) =>{
     try{
        const topic = await Topic.create(req.body)
        const tut = await Tutorial.findById(req.params.id)
        tut.topics.push(topic)
        tut.save()
        res.status(201).json({topic,tut})
     }
     catch(err){
     res.json(err)
    }
}

export const get_topic = async (req,res,next) =>{
     try{
        const topic = await Topic.find(req.params.id)
        res.status(200).json(topic)
     }
     catch(err){
     res.json(err)
    }
}

export const get_topics = async (req,res,next) =>{
     try{
        const topics = await Tutorial.findById(req.params.id).populate('topics')
        res.status(200).json(topics)
     }
     catch(err){
     res.json(err)
    }
}


