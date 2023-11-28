const { model } = require('mongoose')
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

async function getTaskNoCompleted(req,res) {
  Task.find(
    {
      status: {$ne: "completed" }
    }
  )
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
  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    { 
      new: true
    }
  )
    .then(updateTask => {
      console.log('Updated student: ', updateTask)
      res.status(200).json(updateTask)
    })
    .catch(err => {
      console.log('Error while updating the student: ', err)
      res.status(400).json(err)
    });
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
  getTaskNoCompleted,
  getTaskById,
  updateTask,
  deleteTask,
  patchTask,
}