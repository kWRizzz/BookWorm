const cloudinary=require('../utils/cloudinary')

const creartePost= async (req,res) => {
    try {
        const {title,caption,rating,image}=req.body;

        if(!title || !caption || !rating || !image) return res.status(400).json({
            message:"Enter All Credentials"
        })

        const uploadRespose= await cloudinary.uploader.upload(image)
        const imageUrl= uploadRespose.secure_url


    } catch (error) {
        console.log("error ", error);

    }
}