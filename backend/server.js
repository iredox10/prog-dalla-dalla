import express from 'express'
import mongooseConnect from './utils/mongooseConnection.js'
import route from './routes/blog.js'
import cors from 'cors'
const app = express()


app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/blog', route)

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