const config = require('./util/configurations')
const cors= require('cors')
const logger = require('./util/logger')
const middleware = require('./util/middlewares')
const express= require('express')
const taskRouter= require('./Controller/tasks')
const loginRouter=require('./Controller/Loging')
const signupRouter=require('./Controller/SignUp')



const app= express() // we now created an express object
app.use(cors())
logger.info("Connecting to ", config.URL)


app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/tasks',taskRouter)
app.use('/api/login',loginRouter)
app.use('/api/signup',signupRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports= app

