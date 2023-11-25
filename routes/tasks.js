import { Router } from 'express'
import taskController from '../controllers/taskController.js'

const router = Router()

// GET/tasks : Get a incomplete task list
//TODO Filter deleted tasks
//TODO Filter completed tasks
router.get('/', taskController.getTasks)

// GET/tasks/id: Get a detail of a task
router.get('/:id', taskController.getTaskById)

// POST/task: Create a task
router.post('/', taskController.createTask)

// DELETE/task/id: Remove a task
router.delete('/:id', taskController.deleteTask)

// PUT/tasks/id: Update a task
router.put('/:id', taskController.updateTask)

// PATCH/task/id: Mark as completed
router.patch('/:id', taskController.completeTask)


export default router