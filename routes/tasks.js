import { Router } from "express";
import tasks, {statuses} from "../models/tasks.model.js";
import { taskBodyValidation } from "../middleware/tasks.middleware.js";
const router = Router ();

router.get('/', async (req, res) => {
  try {
    const allTasks = await tasks.find();
    res.status(201).json(allTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get('/:id', async (req,res) => {
  try {
    const singleTask = await tasks.findById(req.params.id);
    if (!singleTask) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(singleTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
})

router.put('/:id', taskBodyValidation, async (req,res)=> {
  try {
    const updatedTarea = await tasks.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTarea) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(updatedTarea);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete('/:id', async (req,res)=> {
  try {
    const deletedTask = await tasks.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({ msg: "Task deleted successfully", deletedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.post('/', taskBodyValidation, async (req, res) => {
  try {
    const newTask = new tasks(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.patch('/:id', async (req,res)=> {
  try {
    const taskToUpdate = await tasks.findById(req.params.id);  
    if (!taskToUpdate) {
      return res.status(404).json({ msg: "Task not found" });
    } 
    for (const [key, value] of Object.entries(req.body)) {
      taskToUpdate[key] = value;
    } 
    const updatedTarea = await taskToUpdate.save();
    res.status(200).json(updatedTarea);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

export default router;