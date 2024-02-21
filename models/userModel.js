const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true,"Please add the username"]
    },
    email : {
        type:String,
        required:[true,"Please add the email"],
        unique:[true,"This mail is registered"]
    },
    password : {
        type:String,
        required:[true,"Please add the password"]
    }

},{
    timestapms:true
})

module.exports = mongoose.model("User",userSchema)