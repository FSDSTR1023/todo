import { Router } from 'express'
import tasks, {status} from '../data/tasks.data.js'
import moment from 'moment/moment.js'
import { taskBodyValidation, taskDateValidation } from '../middleware/task.middleware.js'
import { dateFormat } from '../utils/constants/date.js'

const router = Router()

// GET/tasks : Get a incomplete task list
router.get('/', (req, res) => {
    res.json(tasks.filter( task => task.status !== status.COMPLETED && task.deletedAt === null ))
})
  
// GET/tasks/id: Get a detail of a task
router.get('/:id', (req,res) => {

  const { id } = req.params
  const task = tasks.find( task => task.id === id )

  if(!task) res.status(404).send({msg: 'Task not found'})

  res.json(task)
})

// PUT/tasks/id: Update a task
router.put('/:id', taskBodyValidation, (req,res) => {
  
  const { id } = req.params
  const oldTaskIndex = tasks.findIndex( task => task.id === id )
  const oldTask = tasks[oldTaskIndex]
  const newTask = { ...oldTask, ...req.body, id: id }

  tasks.splice(oldTaskIndex, 1, newTask)

  res.json({
      msg: 'task updated successfully',
      oldTask,
      newTask,
  })
})

// DELETE/task/id: Remove a task
router.delete('/:id', (req,res) => {

  const { id } = req.params
  const oldTaskIndex = tasks.findIndex( task => task.id === id )
  const oldTask = tasks[oldTaskIndex]
  const newTask = { ...oldTask, deletedAt: moment().format(dateFormat) }
  
  tasks.splice(oldTaskIndex, 1, newTask)

  res.json({
      msg: "Task " + id + " has been deleted"
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
router.patch('/:id', (req,res) => {

  const { id } = req.params
  const oldTaskIndex = tasks.findIndex( task => task.id === id )
  const oldTask = tasks[oldTaskIndex]
  const newTask = { ...oldTask, status: status.COMPLETED }
  
  tasks.splice(oldTaskIndex, 1, newTask)

  res.json({
    msg: `Task ${id} completed successfully`
  })

})


export default router