const express=require('express')
const dotenv=require('dotenv')
const userRoute=require('./route/user.routes')
const connectDB=require('./utils/db')

const app=express()
const PORT=process.env.PORT || 3000

dotenv.config()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/user',userRoute)

app.listen(PORT,()=>{
    console.log(`http://localhost:3000/`);
})