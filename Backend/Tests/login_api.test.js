const { before, after, beforeEach, test } = require('node:test')
const assert = require('node:assert')
const supertest = require('supertest')
const bcrypt = require('bcrypt')
const mongoose = require("mongoose")
const app = require('../app')
const helper = require("./test_helper")
const User = require("../Model/User")
const logger = require("../util/logger")
const api = supertest(app)
const config = require('../util/configurations')

before(async () => {
    await mongoose.connect(config.URL, { family: 4 })
})


beforeEach(async () => {

    await User.deleteMany({})

    const username = helper.testUsers[0].username
    const password = helper.testUsers[0].password
    const hashedPassword = await bcrypt.hash(password, 10) // suprisingly it returns a promise 
    const user = new User({ username: username, passwordHash: hashedPassword })
    await user.save()


})

test("Sucessful login", async () => {

    const logedin = await api.post('/api/login')
        .send(helper.testUsers[0])
        .expect(200)
    assert.equal(logedin.body.username, helper.testUsers[0].username)

})
test("username is wrong", async () => {
    const logedin = await api.post('/api/login')
        .send({ username: "incorrect", password: "incorrect" })
        .expect(401)
        .expect('Content-Type', /application\/json/)

    assert.equal(logedin.body.error, 'invalid username or password')

})

test("Password is wrong ", async () => {
    const logedin = await api.post('/api/login')
        .send({ username: helper.testUsers[0].username, password: "incorrect" })
        .expect(401)
        .expect('Content-Type', /application\/json/)

})

after(async () => {
    await mongoose.connection.close()
})
