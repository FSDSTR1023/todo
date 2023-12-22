const express = require('express');
const testMiddleware = require("./middleware/test.middleware.js"); 
const tasks = require('./routes/tasks.js');
const users = require('./routes/users.js');

const app = express();
const port = 3000;

require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(testMiddleware.loginCallRoute);

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));

app.use('/tasks', tasks);
app.use('/users', users);

app.get('/', (req, res) => {
    res.send("Hello");
  }
);

app.use((req, res)=> {
  res.status(404).json("404 - Not found");
});

app.use((err, req, res, next)=> {
  console.log(err.stack);
  res.status(500).json("500 - Server error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});