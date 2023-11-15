import lastareas, { statuses } from "../data/tasks.data.js";

const TasksController = {
  getPendingTasks: (req, res) => {
    res.json(lastareas.filter((task) => task.status !== statuses.COMPLETED));
  },
  getById: (req, res) => {
    const task = lastareas.find((task) => task.id === req.params.id);
    if (!task) res.status(404).send({ msg: "Task not found" });
    res.json(task);
  },
  createTask: (req, res) => {
    const newTask = req.body;
    newTask.id = Math.random().toString(36);
    lastareas.push(newTask);
    res.status(201).json(newTask);
  },
};

export default TasksController;
