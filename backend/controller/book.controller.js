const cloudinary=require('../utils/cloudinary')
const bookModel=require('../model/book.model')



const creartePost= async (req,res) => {
    try {
        const {title,caption,rating,image}=req.body;

        if(!title || !caption || !rating || !image) return res.status(400).json({
            message:"Enter All Credentials"
        })

        const uploadRespose= await cloudinary.uploader.upload(image)
        const imageUrl= uploadRespose.secure_url

        const newBook= new bookModel({
            title,
            caption,
            rating,
            image:imageUrl,
            user:req.user._id   
        })

        await newBook.save()

        res.status(201).json({
            message:"User's Book Has Been Created As A Post",
            newBook
        })

    } catch (error) {
        console.log("error ", error);
        res.status(500).json({
            message:"Some Error Has Occured While Creating User's Post"
        })

    }
}

// dummy api from frontend 
// const response= await fetch("https://localhost:3000/api/book/page=1&limit=5")

const sendPost= async (req,res)=>{
    try {
        const page= req.query.page || 1;
        const limit=req.query.limit || 5;
        const skip= (page-1)*limit

        const book = await bookModel.find().sort({createdAt:-1}).skip(skip).limit(limit).populate("user","name profileImage");


        res.send(book)


    } catch (error) {
        console.log(`error occured ${error}`)
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

module.exports={
    creartePost,
    sendPost
}