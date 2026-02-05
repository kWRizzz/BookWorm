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

module.exports={
    creartePost
}