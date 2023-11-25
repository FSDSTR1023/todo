const express = require('express')
const router = express.Router()

const taskController = require('../controllers/tasks.controller')

router.post('/tasks',taskController.createTask )
router.put('/tasks/:id',taskController.updateTask )
router.patch('/tasks/:id', taskController.patchTaskById )
router.get('/tasks/:id', taskController.getTaskById )
router.get('/tasks', taskController.getTasks )
router.delete('/tasks/:id', taskController.deleteTaskById )

module.exports = router;