import express from 'express';
import testMiddleware from "./middleware/test.middleware.js"; 
import tasks from './routes/tasks.js';
import users from './routes/users.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(testMiddleware.loginCallRoute);

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
  console.err(err.stack);
  res.status(500).json("500 - Server error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});