const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique:true
        },
    passwordHash : {
        type:String,
        required: true,
    },
    tasks: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    } 
    ]
})

userSchema.set("toJSON",{
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model("User", userSchema)
module.exports= User