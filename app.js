import express, { json } from 'express'
import cors from 'cors'
import tasks from './routes/tasks.js'
import users from './routes/users.js'
import testMiddleWare from './middleware/test.middleware.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

// Config
const app = express()
const port = 3000
dotenv.config();

// DB connection
const mongoDB =
  "mongodb+srv://" + 
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@" +
  process.env.DB_SERVER +
  "/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority"
mongoose.connect(mongoDB).catch(err => console.log(err))

// Middlewares
app.use(cors())
app.use(json())
app.use(testMiddleWare.logginCallRoute)
app.use('/tasks', tasks)
app.use('/users', users)

// Management of end point not found
app.use((req,res) => {
  res.status(404).json({
    msg: '404 - No Found'
  })
})

// Error management
app.use((err,req,res,next) => {
  console.error(err.stack)
  res.status(500).send('500 - Server Error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})