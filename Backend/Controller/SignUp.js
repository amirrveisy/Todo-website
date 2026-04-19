const userRouter = require('express').Router()
const User = require('../Model/User')
const bcrypt = require('bcrypt')
const logger = require("../util/logger")



userRouter.post('/', async (req, res) => {

  const { username, password } = req.body
  const saltRounds = 10


  const passwordHash = await bcrypt.hash(password, saltRounds)

  const newUser = User({
    username,
    passwordHash
  })

  // logger.info(newUser, "ready to be saved")

  const savedUser = await newUser.save()
  res.status(201).json(savedUser)
})

module.exports = userRouter


