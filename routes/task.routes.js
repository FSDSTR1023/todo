const express = require ('express')
const router = express.Router()

const taskController = require('../controllers/taskController')



router.get('/', taskController.getAllTask) //buscar todas las tareas
router.post('/create', taskController.createTask) // crear una tarea
router.put('/update/:id', taskController.updateTask) // actualizar una tarea por ID
router.get('/:id', taskController.getTaskById) // buscar una tarea por ID
router.delete('/delete/:id', taskController.deleteTask) //eliminar una tarea
router.patch('/update/:id', taskController.changesStatusTask)


module.exports = router