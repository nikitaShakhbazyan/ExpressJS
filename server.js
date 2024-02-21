const express = require('express')
const dotenv = require('dotenv').config()
const routesFromContactRoutes =  require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/api/contacts',routesFromContactRoutes)
app.use(errorHandler)

app.listen(port,() => {
    console.log(`Server is running on port ${port} `)
})