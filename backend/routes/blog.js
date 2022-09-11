import express, { Router } from 'express'
const route = express.Router()
import * as controller from '../controllers/blogController.js'

route.post('/add-blog',controller.add_blog)

route.get('/get-blogs',controller.get_blogs)

route.get('/get-blog/:id', controller.get_blog)

route.put('/edit-blog/:id',controller.edit_blog)

route.delete('/delete-blog',controller.delete_blog)

route.post('/comment/:id',controller.post_comment)

route.get('/get-comment/:id', controller.get_comment)

export default route
