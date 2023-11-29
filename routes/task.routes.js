const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks); // vamos a obtener todas las tareas

router.post('/create', taskController.createTask); // vamos a crear una tarea

router.put('/update/:id', taskController.updateTask); //actualizar una tarea puntual por id

router.get('/:id', taskController.getTaskById); // vamos a buscar una sola tarea por id

router.delete('/delete/:id', taskController.deleteTask); // vamos a borrar una tarea por id

router.patch('/update/:id', taskController.changeStatusTask); //actualizar una tarea puntual por id

module.exports = router;
