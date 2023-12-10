import express from 'express';
//import validateTask from '../middleware/validationMiddleware.js';
import { validateUser, validateTask } from '../middleware/validationMiddleware.js';
import tasksController from '../controllers/tasks.controller.js';

const router = express.Router();

// Dummy data array for tasks - you might replace this with your database logic
// Import tasks data if needed

// Get all tasks
router.get('/', tasksController.getIncompleteTasks); // Assuming this is the intended functionality

// Get a single task by ID
router.get('/:id', tasksController.getTaskById);

// Update a task by ID
router.put('/:id', validateTask, tasksController.updateTaskById);

// Delete a task by ID
router.delete('/:id', tasksController.deleteTaskById);

// Create a new task
router.post('/', validateTask, tasksController.createTask);

// Partially update a task by ID
router.patch('/:id', validateTask, tasksController.markTaskAsCompleted);

export default router;
