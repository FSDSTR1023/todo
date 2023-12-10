import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import loggingMiddleware from './middleware/logging.middleware.js';
import tasks from './routes/tasks.js';
import users from './routes/users.js';
import dbConnection from './config/db.config.js';

const app = express();
const port = process.env.PORT || 3000;

// Database connection
dbConnection();

app.use(loggingMiddleware.logginCallRoute);
app.use(express.json());

// Route for "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route to retrieve tasks for a specific user
app.get('/tasks/user/:userId', (req, res) => {
  const userId = req.params.userId;
});

// Task-related routes
app.use('/tasks', tasks);

// User-related routes
app.use('/users', users);

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// 500 Internal Server Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Server Error');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
