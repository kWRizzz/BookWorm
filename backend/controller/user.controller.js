const jwt = require('jsonwebtoken')
const cookieparser = require('cookieparser')
const bcrypt = require('bcryptjs')
const userModel = require('../model/user.model')
const generateToken = require('../utils/token.generation')
const comparePassword = require('../utils/compare')

const userRegister = async (req, res) => {

    try {
        const { name, email, password } = req.body

        const isExist = await userModel.findOne({
            email
        })

        if (isExist) return res.status(200).json({
            message: "User Already Exist"
        })

        if (password.length < 6) return res.status(200).json({
            message: "Password Too Weak"
        })

        // bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(password, salt, async (err, hash) => {
        //         try {
        //             const userCreated = await userModel.create({
        //                 name: name,
        //                 email: email,
        //                 password: hash
        //             })
        //         } catch (error) {
        //             console.log(err, "  error on generation in salt ", error, " error in hashing ");
        //         }
        //     })
        // })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const userCreated = await userModel.create({
            name: name,
            email: email,
            password: hash
        })

        const token = generateToken(userCreated._id)

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,  
            sameSite: 'lax'
        })

        res.status(200).json({
            message: "User Created",
            token,
            user: {
                userID: userCreated._id,
                userName: userCreated.name,
                userEmail: userCreated.email,
                userPassword: userCreated.password
            }
        })

    } catch (error) {
        console.log("error ===>>> ", error);
        res.status(500).json({
            message: "Error While creating",
            error: error
        })
    }

}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({
            email
        })
        if (!user) return res.status(400).json({
            message: "No User Found"
        })

        const isCorrectPassword = comparePassword(user, password);

        if (!isCorrectPassword) return res.status(200).json({
            message: "User Password Is Wrong"
        })

        const token = generateToken(user._id)

        res.status(200).json({
            message: "User Logged In",
            token,
            user: {
                userID: user._id,
                userName: user.name,
                userEmail: user.email,
                userPassword: user.password
            }
        })

    } catch (error) {
        console.log("system found an error while logging you in ==> ", error)
        res.status(400).json({
            message: "error occured"
        })
    }
}

const userDelete = async (req, res) => {
    try {

        res.cookie()

    } catch (error) {
        console.log("Error WHile " + error)
    }
}

module.exports = {
    userRegister,
    userLogin
}