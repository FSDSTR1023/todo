const express = require('express')
const router = express.Router()

let tasks = require('../mockup_data/tasks')

// GET/tasks : Get a incomplete task list
router.get('/', (req, res) => {
    res.json(tasks.filter( task => task.status !== 'COMPLETED' && task.deletedAt === null ))
})
  
// GET/tasks/id: Get a detail of a task
router.get('/:id', (req,res) => {
  const { id } = req.params
  res.json(tasks.find( task => task.id === id ))
})

// PUT/tasks/id: Update a task
router.put('/:id', (req,res) => {
  
  const { id } = req.params
  const oldTask = tasks.find( task => task.id === id )
  const newTask = { ...oldTask, ...req.body }

  tasks = tasks.map( task => task.id === id ? 
    newTask
    :
    task
  )

  res.json({
      msg: 'task updated successfully',
      oldTask,
      newTask,
  })
})

// DELETE/task/id: Remove a task
router.delete('/:id', (req,res) => {

  const { id } = req.params
  const currentDate = require('../helpers/date')
  console.log(currentDate())

  tasks = tasks.map( task => task.id === id ?
    { ...task, deletedAt: currentDate() }
    :
    task  
  )

  res.json({
      msg: "Task " + id + " has been deleted"
  })
})

// POST/task/: Create a new task
router.post('/', (req,res) => {
  
  tasks = [ ...tasks, req.body ]

  res.json({
      msg: 'Task created successfully'
  })
})

// PATCH/task/id: Mark as completed
router.patch('/:id', (req,res) => {

  const { id } = req.params

  tasks = tasks.map( task => task.id === id ?
      { ...task, status: "COMPLETED" }
      :
      task
  )

  res.json({
    msg: `Task ${id} completed successfully`
  })

})


module.exports = router