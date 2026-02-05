const jwt= require('jsonwebtoken')
const userModel=require('../model/user.model')


// const response = await fetch(`http://localhost:3000/api/books`, {
//   method: "POST",
//   body: JSON.stringify({
//     title,
//     caption
//   }),
//   headers: { Authorization: `Bearer ${token}` },
// });

const protectRoute= async (req,res,next)=>{
    try {
        
        const token=req.header("Authorization").replace("Bearer","")

        if(!token) return res.status(401).json({
            message:"User Token Not Generated"
        })

        const decode= jwt.verify(token,process.env.SECRET)

        const user= await userModel.findById(decode.userID).select("-password")

        if(!user) return res.status(401).json({
            message:"User Not Found While Authenticating"
        })

        req.user=user
        next()

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message:"Some Error Has Occured While Protecting Your Route"
        })
    }
}


module.exports={
    protectRoute
}