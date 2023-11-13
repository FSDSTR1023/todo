import { Router } from "express";
import tasksdata, {statuses} from "../data/tasks.data.js";
const router = Router();

router.get('/', (req, res) => {
    res.json(tasksdata.filter((task) => task.status !== statuses.completed))
});

router.get('/:id', (req,res)=> {
    const task = tasksdata.find((task) => task.id === req.params.id);
    if (!task) res.status(404).send({msg: "Task not found}"});
    res.json(task);
    });

router.post('/', (req,res)=>{
    const newTask = req.body;
    newTask.id = Math.random().toString(36);
    tasksdata.push(newTask);
    res.status(201).json(newTask);
});

router.put('/:id', (req,res)=>{
    console.log("update task",req.query,req.params,req.body)
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: "task updated succesfully"})
        case 400: res.json({msg: "You missed some parameters: parameter1, parameter2, ..."})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "Task not found"})
    }
})

router.delete('/:id', (req,res)=> {
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: req.params.id+" has been deleted"})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "Task not found"})
    }
})

router.patch('/:id', (req,res)=> {
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: "Task marked as completed"})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "Task not found"})
    }
})

export default router;