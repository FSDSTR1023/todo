const express = require('express')
const app = express()
const port = 8000
const tasks = require('./routes/tasks.js')
const users = require('./routes/users.js')

app.use(express.json());
require('dotenv').config();

// SERVIDOR ===================================================================================================
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));
// =================================================================

app.use('/tasks', tasks)
app.use("/users", users);

app.get('/', (req, res) => {
  console.log(process.env.DB_USER)
  res.send('My ToDo App')
})

app.use((req,res) => {
  res.status(404).send('======= 404 - INVALID SEARCH =======')
})

app.listen(port, () => {
  console.log(`ToDo app listening on port ${port}`);
});