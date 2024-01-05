const cors = require("cors")
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}))
require('dotenv').config();

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));

var tasks = require('./routes/tasks')
app.use('/tasks', tasks)

const users = require('./routes/users')
app.use('/users', users)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})