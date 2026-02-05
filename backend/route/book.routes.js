const express=require('express')
const { protectRoute } = require('../middleware/auth.middleware')
const bookController=require("../controller/book.controller")
const router = express.Router()

router.post('/',protectRoute,bookController.creartePost )