const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require('bcrypt')

//@public route,POST method
const registerUser = asyncHandler( async (req,res) => {
    const {username,email,password} = req.body
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!!!!")
    }
    const userAviable = await User.findOne({ email })
    if(userAviable) {
        res.status(400);
        throw new Error("User is registered!!!")
    }

    //Hashed pass
    const hashedPassword = await bcrypt.hash(password,10)
    console.log(`Hashed pass ${hashedPassword}`)
    const user = await User.create({
        username,
        email,
        password : hashedPassword
    })


    console.log(`User created ${user}`)

    if(user) {
        res.status(201).json({_id: user.id, email : user.email})
    } else {
        res.status(400)
        throw new Error ("User data is not valid")
    }
    res.json({message:"Register the user"})
})

//@public route,POST method
const loginUser = asyncHandler((req,res) => {
    res.json({message:"Login the user"})
})

//@privat route,GET method
const currentUser = asyncHandler((req,res) => {
    res.json({message:"Current user inf"})
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}