import express from 'express';
import {
  getAllTasks,
  getIncompleteTasks,
  getTaskById,
  updateTask,
  removeTask,
  createTask,
  markTaskAsCompleted,
  getTasksByUserId
} from '../controllers/tasksController.js';

const router = express.Router();

router.get("/", getAllTasks);
router.get("/incomplete", getIncompleteTasks);
router.get("/:id", getTaskById);
router.put("/edit/:id", updateTask);
router.delete("/:id", removeTask);
router.post("/", createTask);
router.patch("/:id", markTaskAsCompleted);

// GET /tasks/user/:userId - Get tasks by user ID - testing
router.get('/user/:userId', getTasksByUserId);

export default router;
