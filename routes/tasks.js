import express from 'express';
const router = express.Router();
import tasks, { statusTypes }  from "../mockup_data/tasks.js";
import { taskBodyValidation } from "../middleware/task.middleware.js";


// GET /tasks/: Get incompleted tasks
router.get("/", (req, res) => {
  res.json(tasks.filter((task) => task.status !== statusTypes.COMPLETED));
});

// GET /tasks/:id: Get details of a task
router.get('/:id', (req, res) => {
    // console.log("unique task", req.params);
    // res.json(tasks[1]);
    const task = tasks.find((task) => task.id === req.params.id);
    if (!task) res.status(404).send({ msg: "Task not found" });
    res.json(task);
});

// PUT /tasks/:id: Update a task
router.put("/edit/:id", taskBodyValidation, (req, res) => {
  console.log("update task", req.query, req.params, req.body);
  res.json({ msg: "task updated succesfully" });
});

// DELETE /tasks/:id: Remove a task
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id); //finds the index of the task with the given ID.

  // If the task is found (taskIndex > -1), it is removed using tasks.splice(taskIndex, 1).
  if (taskIndex > -1) {
      tasks.splice(taskIndex, 1); // Remove the task
      res.json({ msg: `Task with id ${id} deleted successfully` });
  // If no task is found (taskIndex === -1), a 404 Not Found response is sent.
  } else {
      res.status(404).json({ msg: `Task with id ${id} not found` });
  }
});

// POST /tasks/: Create a new task
router.post('/', (req, res) => {
  console.log("posted new task", req.query, req.params, req.body);
  const newTask = req.body;
  newTask.id = Math.random().toString(36);
  lastareas.push(newTask);
  res.status(201).json(newTask);
});

// PATCH /tasks/:id: Mark as completed
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex > -1) {
      // Update the task's status to completed
      tasks[taskIndex].status = "COMPLETED";

      // Respond with a success message
      res.json({ 
          msg: `Task with id ${id} has been marked as completed`, 
          updatedTask: tasks[taskIndex] 
      });
  } else {
      // Task not found
      res.status(404).json({ msg: `Task with id ${id} not found` });
  }
});

export default router;
