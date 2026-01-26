const jwt = require('jsonwebtoken')
const cookieparser = require('cookieparser')
const bcrypt = require('bcryptjs')
const userModel = require('../model/user.model')

const userRegister = async (req, res) => {
    let { name, email, password } = body.req

    const isExist = await userModel.findOne({
        email
    })

    if (isExist) return res.status(200).json({
        message: "User Already Exist"
    })

    if (password.length < 6) res.status(200).json({
        message: "Password Too Weak"
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash)=>{
            try {
                const userCreated= await userModel.create({
                    name:name,
                    email:email,
                    password:hash
                })
            } catch (error) {
                console.log(err,"  error on generation in salt "  ,error," error in hashing ");
            }
        })
    })

    const token= jwt.sign({
        
    })
}