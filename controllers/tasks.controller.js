import Task from '../models/Task.js';

const TasksController = {
  getIncompleteTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ status: { $ne: 'COMPLETED' } });
      res.json(tasks);
    } catch (error) {
      res.status(500).send('Error retrieving tasks');
    }
  },

  getTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).send('Task not found');
      }
      res.json(task);
    } catch (error) {
      res.status(500).send('Error retrieving task');
    }
  },

  updateTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const updateData = req.body;
      const task = await Task.findByIdAndUpdate(taskId, updateData, { new: true });
      if (!task) {
        return res.status(404).send('Task not found');
      }
      res.json(task);
    } catch (error) {
      res.status(500).send('Error updating task');
    }
  },

  deleteTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      const task = await Task.findByIdAndDelete(taskId);
      if (!task) {
        return res.status(404).send('Task not found');
      }
      res.send(`Task with id ${taskId} was successfully deleted`);
    } catch (error) {
      res.status(500).send('Error deleting task');
    }
  },

  createTask: async (req, res) => {
    try {
      const newTaskData = req.body;
      const newTask = new Task(newTaskData);
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).send('Error creating task');
    }
  },

  markTaskAsCompleted: async (req, res) => {
    try {
      const taskId = req.params.id;
      const updatedTask = await Task.findByIdAndUpdate(taskId, { status: 'COMPLETED' }, { new: true });
      if (!updatedTask) {
        return res.status(404).send('Task not found');
      }
      res.json(updatedTask);
    } catch (error) {
      res.status(500).send('Error updating task');
    }
  }
};

export default TasksController;
