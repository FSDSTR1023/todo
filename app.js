import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors'; // Ensure cors is imported correctly
import loggingMiddleware from './middleware/logging.middleware.js';
import tasks from './routes/tasks.js';
import users from './routes/users.js';
import dbConnection from './config/db.config.js';

const app = express();
const port = process.env.PORT || 3000;

// Database connection details in db.config.js
dbConnection();

// Use CORS middleware - this should be one of the first middlewares
app.use(cors());

app.use(loggingMiddleware.logginCallRoute);
app.use(express.json());

// Route for "Hello World!" to ensure server is up 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route to retrieve tasks for a specific user
// Note: You need to implement the logic to retrieve tasks for the user
app.get('/tasks/user/:userId', (req, res) => {
  const userId = req.params.userId;
  // Implement the logic to retrieve and send tasks for the user
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

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
