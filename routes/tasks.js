import { Router } from 'express'
import tasks, {status} from '../data/tasks.data.js'
import moment from 'moment/moment.js'
import { findIndex, taskBodyValidation, taskDateValidation } from '../middleware/task.middleware.js'
import { dateFormat } from '../utils/constants/date.js'

const router = Router()

// GET/tasks : Get a incomplete task list
router.get('/', (req, res) => {
    res.json(tasks.filter( task => task.status !== status.COMPLETED && task.deletedAt === null ))
})
  
// GET/tasks/id: Get a detail of a task
router.get('/:id', findIndex, (req,res) => {

  const task = tasks[res.index]

  res.json(task)
})

// PUT/tasks/id: Update a task
router.put('/:id',
  taskBodyValidation,
  taskDateValidation,
  findIndex,
  (req,res) => {

  const oldTask = tasks[res.index]
  const newTask = { ...oldTask, ...req.body, id: oldTask.id }

  tasks.splice(res.index, 1, newTask)

  res.json({
      msg: 'Task updated successfully',
      oldTask,
      newTask,
  })
})

// DELETE/task/id: Remove a task
router.delete('/:id', findIndex, (req,res) => {

  const oldTask = tasks[res.index]
  const newTask = { ...oldTask, deletedAt: moment().format(dateFormat) }
  
  tasks.splice(res.index, 1, newTask)

  res.json({
      msg: `Task ${newTask.id} deleted successfully`
  })
})

// POST/task/: Create a new task
router.post('/',
  taskBodyValidation,
  taskDateValidation,
  (req,res) => {

  const { title, description, status, datestart, dateend, user } = req.body
  const newTask = {
    title,
    description,
    status,
    datestart,
    dateend,
    id: Math.random().toString(36),
    user,
    createdAt: moment().format(dateFormat),
    modifiedAt: null,
    deletedAt: null,
  }

  tasks.push(newTask)

  res.status(201).json(newTask)
})

// PATCH/task/id: Mark as completed
router.patch('/:id', findIndex, (req,res) => {

  const oldTask = tasks[res.index]
  const newTask = { ...oldTask, status: status.COMPLETED }
  
  tasks.splice(res.index, 1, newTask)

  res.json({
    msg: `Task ${newTask.id} completed successfully`,
    newTask
  })

})


export default router