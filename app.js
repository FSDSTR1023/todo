import express from 'express';
import testMiddleWare from "./middleware/test.middleware.js";
import tasksRouter from './routes/tasks.js';
import usersRouter from './routes/users.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(testMiddleWare.logginCallRoute);

// Home route
app.get('/', (req, res) => {
res.send('Hello wooorld!');
});

//Routes
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

//Errors
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
  });

app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send("500 - Server Error");
 });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
