import createError from '../utils/createError.js'
import Blog from '../models/blog.js'
import Comment from '../models/comment.js'

export const add_blog = async (req,res,next) =>{
    try {
        const blog = await Blog.create(req.body)
        res.status(201).json(blog)
    } catch (err) {
        next(createError(500, 'server error'))
    }
}

export const get_blogs = async (req,res,next) =>{
     try{ 
        const blogs = await Blog.find()
        res.json(blogs)
     }
     catch(err){
     next(createError(500,'server error'))
    }
}

export const get_blog = async (req,res,next) =>{
     try{ 
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
     }
     catch(err){
     next(createError(500,'server error'))
    }
}



export const edit_blog = async (req,res,next) =>{
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new:true})
        res.status(201).json(blog)
    } catch (err) {
        next(createError(500, 'server error'))
    }
}

export const delete_blog = async (req,res,next) =>{
    try {
        const blog = await Blog.findOneAndDelete(req.params.id)
        res.status(200).json(`deleted ${blog.id}`)
    } catch (err) {
        next(createError(500, 'server error'))
    }
}

export const post_comment = async (req,res,next) =>{
     try{
        const comment = await Comment.create(req.body)
        const blog = await Blog.findById(req.params.id)
        blog.comments.push(comment)
        blog.save()
        res.json({blog})
     }
     catch(err){
     next(createError(500, 'server error'))
    }
}


export const get_comment = async (req,res,next) =>{
    try{
       const comments = await Blog.findById(req.params.id).populate('comments')
       const blogComments = comments.comments
       res.json(blogComments)
    }
    catch(err){
    res.json(err)
   }
}

export const like = async (req,res,next) =>{
     try{
        const blog = await Blog.findByIdAndUpdate(req.params.id,{
            $inc:{likes:1}
        })
        res.json(blog.likes)
     }
     catch(err){
     res.json(err)
    }
}

export const unlike = async (req,res,next) =>{
     try{
        const blog = await Blog.findByIdAndUpdate(req.params.id,{
            $inc:{likes:-1}
        })
        res.json(blog.likes)
     }
     catch(err){
     res.json(err)
    }
}