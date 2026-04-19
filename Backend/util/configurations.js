require('dotenv').config()

const PORT=3001

const URL= process.env.NODE_ENV==="test"
            ? process.env.TEST_URL
            : process.env.MONGODB_URI

const secret=  process.env.secret            

module.exports= {URL, PORT}