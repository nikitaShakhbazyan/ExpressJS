const asyncHandler = require('express-async-handler')

//@public route,POST method
const registerUser = asyncHandler( (req,res) => {
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