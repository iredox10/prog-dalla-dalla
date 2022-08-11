import mongoose from 'mongoose'

const connect = async (url) =>{
    try{
        const connect = await mongoose.connect(url)
        console.log('connect')
    }catch(err){
        console.log(err)
    }
}

export default connect