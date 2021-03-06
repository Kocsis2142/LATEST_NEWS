const express = require('express')
const cors = require("cors")
const app = express()

const corsOptions = {
    origin:`http://localhost:3000`, 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

const newsRoutes = require('./routes/newsRoutes')
app.use('/api/news', newsRoutes)

module.exports = app