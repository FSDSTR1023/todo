const express = require('express');
const app = express();
const port = 3000;

const usersRouter = require('./routes/users.js');
const tasksRouter = require('./routes/tasks.js');

app.use(express.json());

app.use('/tasks', tasksRouter);

app.use('/', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
