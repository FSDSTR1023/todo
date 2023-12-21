const { err } = require("console");
const task = require("../models/tasks.model");


// ===============================    POST    ==============================
// *************************************************************************
async function createTask(req, res) {
  task
    .create(req.body)
    .then((tasksDoc) => {
      console.log(`task create worked well: ${tasksDoc}`);
      res.status(200).json(tasksDoc);
    })
    .catch((err) => {
      console.log(`Creating a new task went wrong! Try again 😞 ${err}`);
      res.status(400).json(err);
    });
}

// ===============================    GET     ==============================
// All tasks _______________________________________________________________
async function retTasksAll(req, res) {
  task
    .find({
    })
    .then((tasksDoc) => {
      console.log("Found this: ", tasksDoc);
      res.status(200).json(tasksDoc);
    })
    .catch((err) => {
      console.log("Error while getting the tasks: ", err);
      res.status(400).json(err);
    });
}

// Taks per ID _____________________________________________________________
async function retTaskById(req, res) {
  task
    .findById(req.params.id)
    .then((tasksDoc) => {
      console.log("Found this task by the ID: ", tasksDoc);
      res.status(200).json(tasksDoc);
    })
    .catch((err) => {
      console.log("Error while getting the tasks: ", err);
      res.status(400).json(err);
    });
}

// ===============================    PUT    ===============================
// *************************************************************************
async function updatedTask(req, res) {
  task
    .findByIdAndUpdate(
      req.params.id,
      {$set: req.body,},
      {new: true,}
    )
    .then((updatedTask) => {
      console.log("updated task: ", updatedTask);
      res.status(200).json(updatedTask);
    })
    .catch((err) => {
      console.log("Error while updating the task ", err);
      res.status(400).json(err);
    });
}

// ===============================   DELETE  ===============================
// *************************************************************************
async function deleteTask(req, res) {
  task.findByIdAndDelete(req.params.id)
    .then((deletedTask) => {
      console.log("Deleted task: ", deletedTask);
      res.status(200).json(deletedTask);
    })
    .catch((err) => {
      console.log("Error while deleting the task: ", err);
      res.status(400).json(err);
    });
}


module.exports = {
  createTask,
  retTasksAll,
  retTaskById,
  updatedTask,
  deleteTask
};
