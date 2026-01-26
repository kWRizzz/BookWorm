const express=require('express')
const dotenv=require('dotenv')

const app=express()
const PORT=process.env.PORT || 3000

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(PORT,()=>{
    console.log(`http://localhost:3000/`);
})