const express = require('express')
const router = express.Router()

const tasks = require('../mockup_data/tasks')

router.get('/', (req, res) => {
    console.log('query params', req.query)
    res.json(tasks)
  })
  
  router.get('/:id', (req,res) => {
    console.log('unique task', req.params, req.query)
    res.json(tasks[0])
  })

  router.post('/', (req,res) => {
    console.log('create task', req.body)
    res.json({
        msg: 'task created successfully'
    })
  })

  router.put('/:id', (req,res) => {
    console.log('update task', req.params, req.body)
    res.json({
        msg: 'task updated successfully'
    })
  })

  router.delete('/:id', (req,res) => {
    res.json({
        msg: "Task " + req.params.id + " has been deleted"
    })
  })

  module.exports = router