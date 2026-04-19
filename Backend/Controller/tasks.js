const taskRouter = require('express').Router()
const Task = require('../Model/Task')

const jwt = require('jsonwebtoken')
const User = require('../Model/User')


const getTokenFrom = req => {
    //console.log('Lets print the req object')
    //console.log(req)

    const authorization = req.get('authorization')
    console.log(authorization)
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ', '')
    }
    return null
}

taskRouter.get('/', async (req, res) => {
  try {
    const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET_STR)

    if (!decodedToken.username) {
      return res.status(401).json({ error: 'token invalid' })
    }

    const user = await User.findOne({ username: decodedToken.username }).populate('tasks')
    return res.status(200).json(user.tasks)

  } catch (error) {
    return res.status(401).json({ error: 'token invalid' })
  }
})



taskRouter.post('/', async (req, res) => {

  try {
    
    const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET_STR)
    const user = await User.findById(decodedToken.id)


    // Adding a new task to our tasks
    const newTask = Task({ task: req.body.task })
    const taskAdded = await newTask.save()
    // console.log(req.body.task)
    // console.log('task was sucessfully added')
    //The new Task should also be added to the set of tasks created by the user

    user.tasks = user.tasks.concat(taskAdded._id)
    await user.save()

    // console.log(user.username)
    // console.log(' was modified')
    res.status(201).json(taskAdded)
    
  } catch (error) {
     return res.status(401).json({ error: 'token invalid' })
    
  }

})


taskRouter.delete('/:id', async (req, res) => {

    const task = await Task.findByIdAndDelete(req.params.id)
    res.status(204).end()

})

module.exports = taskRouter


