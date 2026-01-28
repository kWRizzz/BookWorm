const cloudinary=require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_kEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

module.exports=cloudinary