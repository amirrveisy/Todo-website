const Task= require("../Model/Task")
const User= require("../Model/User")

const testTasks=[

    { task:"test task number 1" },
    {task: "test task number 2"},
    {task: " test task number 3"}
]

const testUsers=[
    {username:"test1" , password: "test1"},
    {username:"test2" , password: "test2"}
]

const incorrectTestUser={username: "incorrect", password:"incorrect"}

const nonExistingId=async ()=>{
    const task = new Task({ task: "Eat like animal"})
    await task.save()  // Saving the new data in the db
    await task.deleteOne()  // deleting the new data

    return task._id.toString()

}

const tasksInDb= async()=>{
    const tasks = await Task.find({})
    return tasks.map(task=> task.toJSON())
}

const usersInDb = async()=>{
    const users= await User.find({})
    return users.map(user=> user.toJSON())
}

module.exports = {testTasks: testTasks,testUsers, incorrectTestUser ,nonExistingId, tasksInDb, usersInDb}