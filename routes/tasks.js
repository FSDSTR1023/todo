import { Router } from 'express';
const router = Router();

import { changeTaskStatus, createTask, deleteTask, getTaskById, getTasks, updateTask } from '../controllers/task.controller.js';

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.patch('/:id', changeTaskStatus);
router.delete('/:id', deleteTask);

export default router;