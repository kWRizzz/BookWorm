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
        
        

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message:"Some Error Has Occured While Protecting Your Route"
        })
    }
}