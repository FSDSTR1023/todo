const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);

router.get('/:id', taskController.getTaskById);

router.post('/create', taskController.createTask);

router.put('/update/:id', taskController.updateTask);

router.delete('/delete/:id', taskController.deleteTask);

router.patch('/update/:id', taskController.changeTaskStatus);

module.exports = router;