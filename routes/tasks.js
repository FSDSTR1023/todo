const express = require('express')
const router = express.Router()

const taskController = require('../controllers/tasks.controller')

router.post('/',taskController.createTask )
router.put('/:id',taskController.updateTask )
router.patch('/:id', taskController.patchTaskById )
router.get('/:id', taskController.getTaskById )
router.get('/', taskController.getTasks )
router.delete('/:id', taskController.deleteTaskById )

module.exports = router