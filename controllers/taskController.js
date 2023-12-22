const Task = require('../models/task.model');

async function createTask(req, res){
    Task.create(req.body)
    .then((task) => {
        console.log('task created', task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'error y que intentes denuevo por que algo fue mal')
        res.status(400).json(err)
    })
}

async function getAllTasks(req, res){
    Task.find()
    .then((task) => {
        console.log('all task found', task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'all task not found, try again')
        res.status(400).json(err)
    })
}

async function updateTask(req, res){
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((task) => {
        console.log('task updated', task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'task not updated, try again')
        res.status(400).json(err)
    })
}

async function getTaskById(req, res) {
    Task.findById(req.params.id)
    .then((task) => {
        console.log('task found')
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'task by id not found, try again')
        res.status(400).json(err)
    })
}

async function deleteTask(req, res){
    Task.findByIdAndDelete(req.params.id)
    .then((task) => {
        console.log('task deleted', task);
        res.status(200).json(task);
    })

    .catch((err) => {  
        console.log(
            err, 
            'error, try again');
        res.status(400).json(err);
    });
}

async function changeStatus(req, res){
    Task.findOneAndUpdate({_id:req.params.id}, {status: req.body.status}, { new: true })
    .then((task) => {
      const userId = task.user;
      console.log('userId:', userId);
      console.log('status Changed to:', task.status, 'for task:', task._id);
      res.status(200).json({ msg: 'Status changed' });
    })

    .catch((err) => {  
        console.log(err, 'error, try again');
        res.status(400).json({ msg : 'Task not found'});
    });
}

module.exports = { createTask, getAllTasks, updateTask, getTaskById, deleteTask, changeStatus };