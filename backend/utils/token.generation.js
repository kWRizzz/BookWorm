const jwt=require('jsonwebtoken')

const generateToken=  (userID)=>{
    const token= jwt.sign({userID},process.env.SECRET)
    return token
}


module.exports=generateToken