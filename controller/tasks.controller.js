const { model } = require('mongoose')
const User = require('../models/user.models')
const Task = require('../models/task.models')

async function createTask(req, res) {
  Task.create(req.body)
    .then(taskDoc => {
      console.log(`Task create worked well: ${taskDoc}`)
      res.status(200).json(taskDoc)
    })
    .catch(error => {
      console.log(`Creating a new task went wrong! Try again 😞 ${error}`)
      res.status(400).json({ error: 'Failed to create task' })
    });
}

async function getTask(req,res) {
  Task.find()
    .then(incompleteTasks => {
      console.log('Found this: ', incompleteTasks)
      res.status(200).json(incompleteTasks)
    })
    .catch(err => {
      console.log('Error while getting the students: ', err)
      res.status(400).json(err)
    });
}

async function getTaskById(req,res) {
  Task.findById(req.params.id)
    .then(taskDoc => {
      console.log('Found this task by their ID: ', taskDoc)
      res.status(200).json(taskDoc)
    })
    .catch(err => {
      console.log('Error while getting the task: ', err)
      res.status(400).json(err)
    });
}

async function updateTask(req,res) {
  try {
    if (Array.isArray(req.body.user)) {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { $addToSet: req.body },
        { new: true }
      );
      console.log('Updated tasks:', updatedTask);
      res.status(200).json(updatedTask);
    } else {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      console.log('Updated task:', updatedTask);
      res.status(200).json(updatedTask);
    }
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(400).json(error);
  }
}

async function deleteTask(req,res) {
  Task.findByIdAndDelete(req.params.id)
    .then(deletedTask => {
      console.log(`Deleted task with id: ${deletedTask.id}`)
      res.status(200).json(deleteTask)
    })
    .catch(err => {
      console.log('Error while deleting one task: ', err)
      res.status(400).json(err)
    })
}

async function patchTask(req,res) {
  Task.findByIdAndUpdate(req.params.id,
    {
      $set: { status: "completed" }
    },
    { 
      new: true
    }
  ) 
    .then(completeTask => {
      console.log('Updated tasks: ', completeTask)
      res.status(200).json(completeTask)
    })
    .catch(err => {
      console.log('Error while updating tasks: ', err)
      res.status(400).json(err)
    });

}



module.exports = {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask,
  patchTask,
}