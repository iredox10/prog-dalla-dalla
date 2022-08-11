import User from '../models/user.js'
import jwt from 'jsonwebtoken'

const signJwt = (id) =>{
    return jwt.sign({id:id}, 'secrect-key', {expiresIn:'1d'})
}

export const register = async (req,res,next) =>{
    try {
        const user = await User.create(req.body)
        const jwt = signJwt(user.id)
        res.status(201).json({user,jwt})
    } catch (err) {
        next(createError(404, 'user error'))
    }
}
