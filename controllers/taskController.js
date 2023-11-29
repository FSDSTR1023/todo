const Task = require('../models/task.model')

async function createTask(req, res){
    Task.create(req.body)
    .then((task) => {
        console.log('task created:',task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'error found, try again')
        res.status(400).json(err)
    })
    
}

async function getAllTask(req, res) {
    Task.find()
    .then((tasks) => {
        console.log('Task received:',tasks)
        res.status(200).json(tasks)
   })
   .catch((err) => {
        console.log(err, 'error found, try again')
        res.status(400).json(err)

    })
        
}

async function updateTask(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((task) => {
        console.log('Task update', task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'error found, try again')
        res.status(400).json(err)

})
}

async function getTaskById(req, res) {
    Task.findById(req.params.id)
    .then((task) => {
        console.log('Task found', task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'not found, try again')
        res.status(400).json(err)

    })
}

async function deleteTask(req, res) {
    Task.findByIdAndDelete(req.params.id)
    .then((task) => {
        console.log('Task deleted', task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'not found, try again')
        res.status(400).json(err)

    })
}

async function changesStatusTask(req, res) {
    Task.findOneAndUpdate({_id: req.params.id},{status : req.body.status},{new:true})
    .then((task) => {
        console.log('Status update', task)
        res.status(200).json(task)
    })
    .catch((err) => {
        console.log(err, 'not found, try again')
        res.status(400).json(err)

    })
}



module.exports = {
    createTask, 
    getAllTask, 
    updateTask, 
    getTaskById, 
    deleteTask,
    changesStatusTask
}