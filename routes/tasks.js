import { Router } from "express";
import tasks, { statuses } from "../mockup_data/tasks.data.js"
import { taskBodyValidation } from "../middleware/task.middleware.js";
const router = Router();

router.get("/", (req, res) => {
  res.json(tasks.filter((task) => task.status !== statuses.COMPLETED));
});

router.get("/:id", (req, res) => {
  const task = tasks.find((task) => task.id === req.params.id);
  if(!task) res.status(404).send({msg: "Task not found"});
  res.json(tasks);
});

router.post("/", taskBodyValidation, (req, res) => {
  const newTask = req.body;
  newTask.id = Math.random().toString(36);
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put("/:id", taskBodyValidation, (req, res) => {
  console.log("update task", req.query, req.params, req.body);
  res.json({ msg: "task updated succesfully" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: req.params.id + " has been deleted" });
});

export default router;