const userRouter = require('express').Router()
const User = require('../Model/User')
const bcrypt = require('bcrypt')
const logger = require("../util/logger")
const jwt = require('jsonwebtoken')
const { eventNames } = require('../app')


userRouter.post('/', async (req, res) => {

    const { username, password } = req.body
    
    const user = await User.findOne({ username })
    logger.info(">>>>>>>>")
    logger.info(user)
    logger.info("<<<<<<<<<")
    const passwordCorrect = user === null ? false :  bcrypt.compare(password, user.passwordHash)
    logger.info(passwordCorrect)

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const newobject ={
        username: user.username,
        id: user._id
    }
    const token = jwt.sign(newobject,process.env.SECRET_STR, {expiresIn :60*60})

    res.status(200).send({token, username})
})

module.exports = userRouter


