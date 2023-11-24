import { Router } from "express";
import TasksController from "../controller/tasks.controller.js";
import { taskBodyValidation } from "../middleware/task.validations.js";
const router = Router();

const { getPendingTasks, getById, createTask } = TasksController;

router.get("/", getPendingTasks);
router.get("/:id", TasksController.getById);
router.post("/", taskBodyValidation, createTask);

router.put("/:id", taskBodyValidation, TasksController.updateTask);

router.delete("/:id", TasksController.deleteTask);

export default router;
