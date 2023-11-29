const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getTasks);

router.get('/:id', tasksController.getTaskById);

router.post('/', tasksController.createTask);

router.put('/:id', tasksController.updateTaskById);

router.delete('/:id', tasksController.deleteTaskById);

router.patch('/:id', tasksController.markTaskAsCompleted);

module.exports = router;