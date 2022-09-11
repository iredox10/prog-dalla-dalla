import jwt from 'jsonwebtoken'
import createError from './createError.js'

export const verifyUser = async (req,res,next)=>{
    const header = req.headers.token
    if(!header) next(createError(301,'you are not allowed'))
    const token = header.split('')[1]
    jwt.verify(token, 'secret-key', (err,user) =>{
        if(err){
            next(createError(301,'you are not authorize'))
        }
        res.json(user)
        next()
    })
}
