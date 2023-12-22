const Task = require('../models/task.model');

async function getTasks(req,res) {
    Task.find({
        status: {$ne: "COMPLETED"},
        deletedAt: {$eq: null}
    })
        .then(tasks => {
            console.log('Found this: ', tasks)
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log('Error while getting the tasks: ', err)
            res.status(400).json(err)
        });
}

async function createTask(req, res) {
    const task= req.body;
    console.log(task);
    task.id = Math.random().toString(36);
    task.createdAt = new Date();
    console.log(task.createdAt);
    Task.create(task)
    .then(task => {
        console.log(`Task created succesfully: ${task}`)
        res.status(200).json(task)
    })
    .catch(err => {
        console.log('Error while creating the task: ', err)
        res.status(400).json(err)
    });
}

async function getTaskById(req,res) {
    Task.findById(req.params.id)
        .then(tasks => {
            console.log('Found this: ', tasks)
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log('Error while getting the task: ', err)
            res.status(400).json(err)
        });
}

async function updateTaskById(req,res) {
    const taskToUpdate = req.body;
    taskToUpdate.modifiedAt = new Date();
    Task.findByIdAndUpdate(req.params.id, {$set: taskToUpdate}, {new: true})
        .then(task => {
            console.log('Task updated: ', task)
            res.status(200).json(task)
        })
        .catch(err => {
            console.log('Error while updating the task: ', err)
            res.status(400).json(err)
        });
}

async function deleteTaskById(req,res) {
    const deletedDate = new Date();
    console.log(deletedDate);
    Task.findByIdAndUpdate(req.params.id, {$set: {deletedAt: deletedDate}})
        .then(task => {
            console.log('Task deleted: ', task)
            res.status(200).json(task)
        })
        .catch(err => {
            console.log('Error while deletting the task: ', err)
            res.status(400).json(err)
        });
}

async function markTaskAsCompleted(req,res) {
    const modifiedDate = new Date();
    Task.findByIdAndUpdate(req.params.id, {$set: {status: "COMPLETED", modifiedAt: modifiedDate}}, {new: true})
        .then(task => {
            console.log('Task updated: ', task)
            res.status(200).json(task)
        })
        .catch(err => {
            console.log('Error while updating the task: ', err)
            res.status(400).json(err)
        });
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
    markTaskAsCompleted
}