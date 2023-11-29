<<<<<<< HEAD
import express from "express";
import loggingMiddleware from "./middleware/logging.middleware.js";
import tasks from "./routes/tasks.js";
import users from "./routes/users.js";

const app = express();
const port = 3000;

app.use(loggingMiddleware.logginCallRoute);
app.use(express.json());

app.use("/tasks", tasks);
app.use("/users", users);

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Server Error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
=======



const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
require('dotenv').config()

const mongoose = require('mongoose')

const mongoDB = 
"mongodb+srv://"
+process.env.DB_USER+
":"+
process.env.DB_PASSWORD+
"@"+
process.env.DB_SERVER+
"/"+
process.env.DB_NAME+
"?retryWrites=true&w=majority";

console.log(mongoDB, 'mongoDB')
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));

const taskRoutes = require('./routes/task.routes')
const userRoutes = require('./routes/user.routes')


app.use('/task', taskRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    console.log(process.env.DB_USER)
    res.send('TASK API BACKEND')
})

app.listen(port, () => {
    console.log('Server running on port: ',port)
})

>>>>>>> abc0a02 (Backend casi terminado)
