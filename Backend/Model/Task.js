const configs = require('../util/configurations')
const log= require('../util/logger')
const mongoose= require('mongoose')
mongoose.set('strictQuery', false)

const taskSchema = new mongoose.Schema({
  task: {
    type: String, 
    require : true, 
    minlength: 3
  }
})

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
module.exports = mongoose.model('Task', taskSchema)