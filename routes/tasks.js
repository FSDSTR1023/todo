import { Router } from 'express';
import tasks, {statuses} from '../data/tasks.data.js';
const router = Router();

router.get('/', (req, res) => {
    res.json(tasks.filter((task)=>task.status!==statuses.COMPLETED));
});

router.get('/:id', (req, res) => {
    const task = tasks.find((task)=>task.id===req.params.id);
    if (!task) res.status(404).send({msg:"Task not found"});
    res.json(task);
});

router.post('/', (req, res) => {
    const task= req.body;
    task.id = Math.random().toString(36);
    task.createdAt = new Date();
    tasks.push(task);
    res.status(201).json(task);
});

router.put('/:id', (req, res) => {
    const taskIndex = tasks.findIndex((task)=>task.id===req.params.id);
    const taskUpdated = req.body;
    if (taskIndex<0) res.status(404).send({msg:"Task not found"});
    else {
        taskUpdated.modifiedAt = new Date();
        tasks[taskIndex]=taskUpdated;
        res.json({msg: "The task was updated succesfully"});
    }
});

router.delete('/:id', (req, res) => {
    const taskIndex = tasks.findIndex((task)=>task.id===req.params.id);
    if (taskIndex<0) res.status(404).send({msg:"Task not found"});
    else {
        taskUpdated.deletedAt = new Date();
        tasks[taskIndex]=taskUpdated;
        res.json({mes: req.params.id+" ha sido eliminada"});
    }
});

export default router;