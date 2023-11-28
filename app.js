import express from 'express';
import testMiddleWare from "./middleware/test.middleware.js";
import indexRouter from './routes/index.js';
import tasksRouter from './routes/tasks.js';
import usersRouter from './routes/users.js';

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

 //Port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
