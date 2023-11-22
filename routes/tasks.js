import { Router } from 'express';
import tasks, {statuses} from '../data/tasks.data.js';
const router = Router();

router.get('/', (req, res) => {
    res.json(tasks.filter((task)=>((task.status!==statuses.COMPLETED)&&(task.deletedAt===null))));
    // console.log(tasks);
});

router.get('/:id', (req, res) => {
    const task = tasks.find((task)=>task.id===req.params.id);
    if (!task) res.status(404).send({msg:"Task not found"});
    res.status(200).json(task);
});

router.post('/', (req, res) => {
    const task= req.body;
    task.id = Math.random().toString(36);
    task.createdAt = new Date().toLocaleDateString();
    tasks.push(task);
    console.log("tasks: ", tasks);
    res.status(201).json(task);
});

router.put('/:id', (req, res) => {
    const taskIndex = tasks.findIndex((task)=>task.id===req.params.id);
    const taskUpdated = req.body;
    if (taskIndex<0) res.status(404).send({msg:"Task not found"});
    else {
        taskUpdated.modifiedAt = new Date().toLocaleDateString();
        tasks[taskIndex]=taskUpdated;
        res.json({msg: "The task was updated succesfully"});
    }
});

router.delete('/:id', (req, res) => {
    const taskIndex = tasks.findIndex((task)=>task.id===req.params.id);
    if (taskIndex<0) res.status(404).send({msg:"Task not found"});
    else {
        tasks[taskIndex].deletedAt = new Date().toLocaleDateString();
        res.json({mes: req.params.id+" has been deleted"});
    }
});

router.patch('/:id', (req, res) => {
    const taskUpdated = tasks.find((task)=>task.id===req.params.id);
    if (taskUpdated===undefined) res.status(404).send({msg:"Task not found"});
    else {
        taskUpdated.modifiedAt = new Date().toLocaleDateString();
        taskUpdated.status = statuses.COMPLETED;
        res.json({mes: taskUpdated.title+" has been marked as completed"});
    }
});

export default router;