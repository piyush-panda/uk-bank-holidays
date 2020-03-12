const express = require('express')
    ,app = express()
    ,serverless = require('serverless-http')
    ,holidays = require('./src/routes/holidays')
    ,cors = require('cors')

app.use(cors())

app.use('/holidays', holidays)

module.exports = app // for testing Purpose

module.exports.handler = (event, context) => {
    const handler = serverless(app)
    return handler(event, context)
}