const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const tasks = require('./routes/tasks')
app.use('/tasks',tasks)

const users = require('./routes/users')
app.use('/users',users)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

