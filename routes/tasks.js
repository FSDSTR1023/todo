import { Router } from 'express';
const router = Router();

import { taskBodyValidation } from '../middlewares/task.validations.js';
import { tasks, statusTypes } from '../mock_data/tasks.data.js';

router.get('/', (req, res) => {
    const pendingTasks = tasks.filter((task) => task.status !== statusTypes.COMPLETED);
    res.json(pendingTasks);
});
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const task = tasks.find((task) => task.id === req.params.id);
    if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
    }
    res.json(task);
});
router.post('/', taskBodyValidation, (req, res) => {
    const newTask = req.body;
    newTask.id = Math.random().toString(36);
    tasks.push(newTask);
    res.status(201).json(newTask);
});
router.put('/:id', taskBodyValidation, (req, res) => {
    res.json({ msg: 'Updated Task Correctly' });
});

router.patch('/:id', (req, res) => {
    res.json({ msg: req.params.id + 'markred as done' });
});
router.delete('/:id', (req, res) => {
    const taskToDelete = tasks.find((task) => task.id === req.params.id);
    if (!taskToDelete) {
        return res.status(404).json({ msg: 'Task not found' });
    }
    tasks.splice(tasks.indexOf(taskToDelete), 1);
    res.json({ msg: req.params.id + 'task deleted succsefully' });
});

export default router;