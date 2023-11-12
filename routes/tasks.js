const express = require('express');
const router = express.Router();

const tasks = require("../mockup_data/tasks.js")

// GET /tasks: Get a complete task list
router.get('/', (req, res) => {
  console.log("unique task", req.params);
  res.json(tasks);
});

// GET /tasks/:id: Get a detail of a task
router.get('/:id', (req, res) => {
    console.log("unique task", req.params);
    res.json(tasks[1]);
});

// PUT /tasks/:id: Update a task
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex > -1) {
    tasks[taskIndex].title = "different title";
    tasks[taskIndex].description = "different description";
    tasks[taskIndex].user = "different name";

    res.json({ 
      msg: `Task with id ${id} updated successfully`, 
      updatedTask: tasks[taskIndex] 
  });
} else {
    res.status(404).json({ msg: `Task with id ${id} not found` });
}
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
    const newTask = {
      id: tasks.length + 1, // This is a simple way to generate a unique ID
      title: "Posted title",
      description: "new posted description",
      status: "PENDING",
      datestart: req.body.datestart,
      dateend: req.body.dateend,
      user: req.body.user,
      createdAt: new Date().toISOString(),
      modifiedAt: null,
      deletedAt: null
  };
    // Add the new task to the tasks array
    tasks.push(newTask);
    // Respond with the newly created task
    res.json({ msg: "New task posted successfully", newTask });
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

module.exports = router;
