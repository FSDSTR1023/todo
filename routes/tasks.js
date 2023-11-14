import { Router } from "express";
import TasksController from "../controller/tasks.controller.js";
import { taskBodyValidation } from "../middleware/task.validations.js";
const router = Router();

const { getPendingTasks, getById, createTask } = TasksController;

router.get("/", getPendingTasks);
router.get("/:id", getById);
router.post("/", taskBodyValidation, createTask);

router.put("/:id", taskBodyValidation, (req, res) => {
  console.log("update task", req.query, req.params, req.body);
  res.json({ msg: "task updated succesfully" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: req.params.id + " has been deleted" });
});

export default router;
