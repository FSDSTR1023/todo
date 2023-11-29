import Task from '../models/task.model.js';
import { statusTypes }  from "../mockup_data/tasks.js";

// GET /tasks/: Get all tasks
export async function getAllTasks (req, res) {
    try {
        const tasks = await Task.find().populate('user', 'firstname lastname');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /tasks/incomplete: Get incomplete tasks
export async function getIncompleteTasks (req, res) {
    try {
        const tasks = await Task.find({ status: { $ne: statusTypes.COMPLETED } });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /tasks/:id: Get task by id
export async function getTaskById (req, res) {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ msg: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /tasks/:id: Update a task
export async function updateTask (req, res) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ msg: "Task not found" });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE /tasks/:id: Remove a task
export async function removeTask (req, res) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: "Task not found" });
        }
        res.json({ msg: `Task with id ${task.id} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /tasks Create a new task
export async function createTask (req, res) {
    let defaultUserId = "65667ea907c742949ec65527";
    let userId;

    if (req.headers.authorization) {
        userId = getUserIdFromToken(req); // Extract user ID from the token
    } else {
        userId = defaultUserId; // Setting a default user ID
    }

    const newTask = new Task({
        ...req.body,
        user: userId
    });
    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PATCH /tasks/:id: Mark as completed
export async function markTaskAsCompleted (req, res) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { status: "COMPLETED" },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ msg: "Task not found" });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get tasks based on user ID - EX: http://localhost:3001/tasks/user/65667ea907c742949ec65527
export async function getTasksByUserId(req, res) {
    try {
        const userId = req.params.userId;
        const tasks = await Task.find({ user: userId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


