import express from 'express'
import * as controller from '../controllers/tutController.js'

const route = express.Router()

route.post('/add-tut',controller.add_tut)

route.get('/get-tut',controller.get_tut)

route.get('/get-tuts',controller.get_tuts)

route.post('/add-topic/:id',controller.add_topic)

route.get('/get-topic/:id',controller.get_topic)

route.get('/get-topics/:id',controller.get_topics)

export default route