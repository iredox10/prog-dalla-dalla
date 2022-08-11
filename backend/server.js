import express, { urlencoded } from 'express'
import mongooseConnect from './utils/mongooseConnection.js'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongooseConnect('mongodb://localhost/prog-dalla-dalla')


app.use((err,req,res,next)=> { 
    const errMsg = err.message
    const errStatus = err.status
    res.json({
        message: errMsg,
        status: errStatus,
        stack: err.stack
    })
})
app.listen('8888')