const asyncHandler = require('express-async-handler')

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req,res) => {
    res.status(200).json({message : 'Get all contacts'})
})

const createContact = asyncHandler ( async (req,res) => {
    console.log(`The request body ${JSON.stringify(req.body)}`);
    const {name,email,phone} = req.body
    if(!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message : 'Create new contact'})
})

const getContact = asyncHandler ( async (req,res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`})
})

const updateContact = asyncHandler( async (req,res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`})
})

const deleteContact = asyncHandler ( async (req,res) => {
    res.status(200).json({message : `Delete contact ${req.params.id}`})
})


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}