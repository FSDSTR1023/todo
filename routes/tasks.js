import { Router } from "express";
import TasksController from "../controller/tasks.controller.js";
import { taskBodyValidation } from "../middleware/task.validations.js";
import lastareas, { statuses } from "../data/tasks.data.js"
const router = Router();


const { getPendingTasks, getById, createTask } = TasksController;

router.get("/", getPendingTasks);
router.get("/:id", getById);
router.post("/", taskBodyValidation, createTask);

router.get("/", (req,res) => {
  res.json(lastareas.filter((task) => task.status !== statuses.COMPLETED))
})

router.get("/:id", (req,res) => {
  const task = lastareas.find((task) => task.id === req.params.id)
  if (!task) res.status(404).send({msg:"Task not found"})
  res.json(task)
})

router.post("/",taskBodyValidation, (req,res) => {
  const newTask = req.body
  newTask.id = Math.random().toString(36)
  lastareas.push(newTask)
  res.status(201).json(newTask)
})

router.put("/:id", taskBodyValidation, (req, res) => {
  console.log("update task", req.query, req.params, req.body);
  res.json({ msg: "task updated succesfully" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: req.params.id + " has been deleted" });
});

export default router;