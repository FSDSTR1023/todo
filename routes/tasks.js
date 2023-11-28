const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

// router.get('/', (req, res) => {
//     res.json(tasks.filter((task)=>((task.status!==statuses.COMPLETED)&&(task.deletedAt===null))));
//     // console.log(tasks);
// });

router.get('/', tasksController.getTasks);

router.get('/:id', tasksController.getTaskById);

router.post('/', tasksController.createTask);
// (req, res) => {
//     const task= req.body;
//     task.id = Math.random().toString(36);
//     task.createdAt = new Date().toLocaleDateString();
//     tasks.push(task);
//     console.log("tasks: ", tasks);
//     res.status(201).json(task);
// }

router.put('/:id', tasksController.updateTaskById);

router.delete('/:id', tasksController.deleteTaskById);

router.patch('/:id', tasksController.markTaskAsCompleted);

module.exports = router;