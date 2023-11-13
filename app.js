import express, { json } from 'express'
import tasks from './routes/tasks.js'
import users from './routes/users.js'
import testMiddleWare from './middleware/test.middleware.js'

const app = express()
const port = 3000

app.use(json())
app.use(testMiddleWare.logginCallRoute)
app.use('/tasks', tasks)
app.use('/users', users)

// Example
app.get('/', testMiddleWare.logginCallRoute, (req,res) => {
  // throw new Error('error')
  res.json({
    msg: 'test completed'
  })
})

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