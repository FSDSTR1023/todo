import Task from '../models/task.model.js'
import { status } from '../data/tasks.data.js'

const getTasks = async (req, res) => {
    Task.find({deletedAt: undefined})
    .then(taskList => res.status(200).json(taskList))
    .catch(error => {
        console.log(`Error finding the tasks: ${error}`)
        res.status(400).json(error)
    })
}

const getTaskById = async (req, res) => {
    Task.findById(req.params.id)
    .then(task => res.status(200).json(task))
    .catch(error => {
        console.log(`Error finding the task: ${error}`)
        res.status(400).json(error)
    })
}

const createTask = async (req, res) => {
    Task.create(req.body)
    .then(task => {
        console.log(`Task create worked well: ${task}`)
        res.status(201).json(task)
    })
    .catch(error => {
        console.log(`Creating a new task went wrong! Try again 😞 ${error}`)
        res.status(400).json(error)
    })
}

// const deleteTask = async (req, res) => {
//     Task.deleteOne({ _id: req.params.id })
//     .then(res.status(200).json({
//         msg: `Task ${req.params.id} deleted successfully`
//     }))
//     .catch(error => {
//         console.log(`Error deleting the task: ${error}`)
//         res.status(400).json(error)
//     })
// }

const deleteTask = async (req, res) => {
    Task.findByIdAndUpdate(req.params.id,
        { deletedAt: new Date()}, {new: true})
    .then(task => res.status(200).json(task))
    .catch(error => {
        console.log(`Error updating the task: ${error}`)
        res.status(400).json(error)
    })
}

const updateTask = async (req, res) => {
    Task.findByIdAndUpdate(req.params.id,
        { $set: req.body}, {new: true})
    .then(task => res.status(200).json(task))
    .catch(error => {
        console.log(`Error updating the task: ${error}`)
        res.status(400).json(error)
    })
}

const completeTask = async (req, res) => {
    Task.findByIdAndUpdate(req.params.id,
        { $set: {status: status.COMPLETED}}, {new: true})
    .then(task => res.status(200).json(task))
    .catch(error => {
        console.log(`Error completing the task: ${error}`)
        res.status(400).json(error)
    })
}

const taskController = {
    getTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask,
    completeTask
}

export default taskController