const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController')

router.post('/task', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/edit/:id', taskController.editTask);
router.delete('/:id', taskController.deleteTaskByID);
router.patch('/edit/:id', taskController.changeStatusTask);



module.exports = router;