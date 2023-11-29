import express from 'express';
import testMiddleWare from "./middleware/test.middleware.js";
import indexRouter from './routes/index.js';
import tasksRouter from './routes/tasks.js';
import usersRouter from './routes/users.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

//Conexión con MongoDB Atlas
const mongoDB = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_SERVER+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch(err => console.log(err));

//App & Middleware
const app = express();
const port = 3001;

import cors from "cors";
app.use(cors());

app.use(express.json());
app.use(testMiddleWare.logginCallRoute);

//Routes
app.use('/', indexRouter)
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

// 404 Errors
app.use((req, res, next) => {
  res.status(404).send("404 - Not Found");
});

// General Errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Server Error");
});

// Function to close the database connection
function closeDatabaseConnection() {
  mongoose.connection.close(() => {
      console.log('Mongoose connection closed.');
  });
}
// Handle graceful shutdown
// Listens for the SIGINT signal (typically triggered by pressing Ctrl+C in the terminal) 
//to handle graceful shutdown. It closes the database connection and exits the process.
process.on('SIGINT', () => {
  closeDatabaseConnection();
  process.exit(0);
});

 //Port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
