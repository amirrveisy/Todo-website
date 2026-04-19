const { before, after, beforeEach, test } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
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
})

test(" Correct signup", async () => {

    const returned = await api.post('/api/signup')
        .send(helper.testUsers[0])
        .expect(201)
        .expect('Content-Type', /application\/json/)

    assert.equal(returned.body.username, helper.testUsers[0].username)


})

after(async () => {
    await mongoose.connection.close()
})



