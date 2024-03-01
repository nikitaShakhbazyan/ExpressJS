const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

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
const loginUser = asyncHandler( async (req,res) => {
    const {email,password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error ("All fields are mandatory!)")
    }
    const user = await User.findOne({email})
    // compare pass with hashepass
    if(user && (await bcrypt.compare(password,user.password))) {
        const accessToken = jwt.sign({
            user : {
                username: user.username,
                email: user.email,
                id : user.id
            },
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1m'}   )
        res.status(200).json({accessToken});
    } else {
        res.status(401)
        throw new Error("Email or pass is not valid")
    }
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