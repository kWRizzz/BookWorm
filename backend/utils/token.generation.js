const jwt=require('jsonwebtoken')

const generateToken= async (userID)=>{
    return jwt.sign({userID},process.env.SECRET)
}


module.exports=generateToken