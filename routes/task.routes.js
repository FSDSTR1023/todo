const express = require('express');
const router = express.Router(); //Router es un metodo que trae express y se mete todo en una variable.

const taskController = require('../controllers/taskController');



router.get('/', taskController.getAllTasks);

router.post('/create', taskController.createTask);

router.put('/update/:id', taskController.updateTask); 

router.get('/:id', taskController.getTaskById);

router.delete('/delete/:id', taskController.deleteTask); 

router.patch('/update/:id', taskController.changeStatus);


module.exports = router;