const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const comparePassword= async (user,password)=>{
    return await bcrypt.compare(user.password,password)
}


module.exports=comparePassword