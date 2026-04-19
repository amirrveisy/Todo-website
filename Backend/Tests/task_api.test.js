const { test, describe, beforeEach, before, after } = require('node:test')
const assert = require('node:assert')
const helper = require('./test_helper')
const Task = require('../Model/Task')
const supertest = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const User = require('../Model/User')
const config = require('../util/configurations')
let token = null

const api = supertest(app)

before(async () => {
  await mongoose.connect(config.URL, {family: 4})

  await User.deleteMany({})

  const newUser = {
    username: 'test123',
    password: 'test123'
  }
  // it saves the user inside the db
  // and then in the next line would gain the token

  const newadded = await api.post('/api/signup')
    .send(newUser)


  const response = await api.post('/api/login')
    .send(newUser)

  token = response.body.token

})


beforeEach(async () => {

  await Task.deleteMany({})

  const user = await User.findOne({ username: 'test123' })
  user.tasks = []

  const task1 = await new Task(helper.testTasks[0]).save()
  const task2 = await new Task(helper.testTasks[1]).save()

  user.tasks.push(task1._id, task2._id)
  await user.save()

})

describe("Testing the get method ", () => {


  test("invalid token ", async () => {
    await api.get('/api/tasks')
      .set('Authorization', `Bearer invalid`)
      .expect(401)
      .expect({ error: 'token invalid' })
  })


  test("Making sure the content type and retunred status are correct", async () => {

    const tasks = await api.get('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

  })



  test("Returned tasks must be 2", async () => {

    const tasks = await api.get('/api/tasks')
      .set('Authorization', `Bearer ${token}`)

    assert.strictEqual(tasks.body.length, 2)

  })

  test("")


})


describe("Testing the post method", () => {



  test("invalid token ", async () => {
    await api.post('/api/tasks')
      .set('Authorization', `Bearer invalid`)
      .expect(401)
      .expect({ error: 'token invalid' })
  })


  test('The new task was correctly added to the task db', async () => {

    const tasks = await api.post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send(helper.testTasks[2])

    // console.log('We reached here')  
    const dbTasks =await Task.find({})
    // console.log("we also reached here")
    // console.log(dbTasks)
    
    assert.strictEqual(dbTasks.length, helper.testTasks.length)

  })

  test('The task was added to User\'s tasks array ', async () => {

    const tasks = await api.post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send(helper.testTasks[2])


    const users = await User.find({})
    const user = users[0]
    
    assert.strictEqual(user.tasks.length, helper.testTasks.length)

  })






  test("Making sure it works perfectly", async () => {

    const tasks = await api.post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send(helper.testTasks[2])
      .expect(201)
      .expect('Content-Type', /application\/json/)

    
    const response= await api.get('/api/tasks')
    .set('Authorization', `Bearer ${token}`)
    .expect(200)

    const contents= response.body.map(t=>t.task)
    assert.strictEqual(contents.length,3)

    assert(contents.includes(helper.testTasks[2].task))


  })


})

after(async () => {
  await mongoose.connection.close()
})