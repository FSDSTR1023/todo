import { Router } from "express";
import lastareas, { statuses } from "../data/tasks.data.js";
import { taskBodyValidation } from "../middleware/task.middleware.js";
const router = Router();

router.get("/", (req, res) => {
  res.json(lastareas.filter((task) => task.status !== statuses.COMPLETED));
});

router.get("/:id", (req, res) => {
  const task = lastareas.find((task) => task.id === req.params.id);
  if (!task) res.status(404).send({ msg: "Task not found" });
  res.json(task);
});

router.post("/edit", taskBodyValidation, (req, res) => {
  const newTask = req.body;
  newTask.id = Math.random().toString(36);
  lastareas.push(newTask);
  res.status(201).json(newTask);
});

router.put("/edit/:id", taskBodyValidation, (req, res) => {
  console.log("update task", req.query, req.params, req.body);
  res.json({ msg: "task updated succesfully" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: req.params.id + " has been deleted" });
});

export default router;
