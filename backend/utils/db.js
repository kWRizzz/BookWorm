const mongoose =require('mongoose')

const connect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB).then(()=>console.log("database connected"))
    } catch (error) {
        console.log("error in the data bases => ",error)
    }
}

module.exports= connect