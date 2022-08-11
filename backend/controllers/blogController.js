import createError from '../utils/createError.js'
import Blog from '../models/blog.js'

export const add_blog = async (req,res,next) =>{
    try {
        const blog = await Blog.create(req.body)
        res.status(201).json(blog)
    } catch (err) {
        next(createError(500, 'server error'))
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