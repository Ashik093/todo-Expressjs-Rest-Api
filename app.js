const express = require('express')
const app = new express()
const router = require('./src/routes/api.js')

const bodyParser = require('body-parser')

//security middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xssClean = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')
const mongoose = require('mongoose')


app.use(helmet())
app.use(mongoSanitize())
app.use(xssClean())
app.use(hpp())
app.use(cors())

app.use(bodyParser.json())

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

//mongodb connection
let URI = "mongodb://127.0.0.1:27017/Todo"
let OPTION = { user: '', pass: '', autoIndex: true }
mongoose.connect(URI, OPTION, (error) => {
    console.log("Database Connection Success")
    console.log(error)
})

app.use('/api/v1', router)

app.use('*', (req, res) => {
    res.status(404).json({ status: "failed", data: "Not found" })
})

module.exports = app