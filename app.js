const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Task routes
const tasksRouter = require('./routes/tasks'); 
app.use('/tasks', tasksRouter);

// User routes
const usersRouter = require('./routes/users'); 
app.use('/users', usersRouter);

// Home route
app.get('/', (req, res) => {
    res.send('Hello wooorld GET request!');
});

// Message route
app.get('/message', (req, res) => {
    res.status(403).json({
        msg: "user has not access"
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
