const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');

router.get('/', taskController.getAllTasks);

router.post('/create', taskController.createTask);

router.put('/update/:id', taskController.updateTask);

router.get('/:id', taskController.getTaskById);

router.delete('/delete/:id', taskController.deleteTask);

router.patch('/update/:id', taskController.changeStatusTask);

module.exports = router;