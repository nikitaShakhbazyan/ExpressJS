const express = require('express')
const dotenv = require('dotenv').config()
const routesFromContactRoutes =  require('./routes/contactRoutes')

const app = express()
const port = process.env.PORT || 5000;

app.use('/api/contacts',routesFromContactRoutes)

app.listen(port,() => {
    console.log(`Server is running on port ${port} `)
})