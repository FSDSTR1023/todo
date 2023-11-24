import tasks, { statuses } from "../data/tasks.data.js";

let taskIdCounter = Math.max(...tasks.map(task => task.id)) + 1;

const TasksController = {
  getPendingTasks: (req, res) => {
    res.json(tasks.filter((task) => task.status !== statuses.complete));
  },
  getById: (req, res) => {
    const taskId = tasks.find((task) => task.id === parseInt(req.params.id));
    if (!taskId) res.status(404).send({ msg: "Task not found" });
    res.json(taskId);
  },
  createTask: (req, res) => {
    const newTask = req.body;
    newTask.id = taskIdCounter++;
    const newTaskId = { id: newTask.id, ...newTask };
    tasks.push(newTaskId);
    res.status(201).json(newTaskId);
  },
  deleteTask: (req, res) => {
    const taskId = tasks.findIndex((task) => task.id === parseInt(req.params.id));
    if (taskId === -1) {
      return res.status(404).json({ msg: "Task not found" });
   }
    const deletedTask = taskId.splice(taskId, 1)[0];
    res.json({ msg: `Task ${deletedTask.id} - ${deletedTask.title} has been deleted` });
  },
  updateTask: (req, res) => {
    const taskId = tasks.findIndex((task) => task.id === parseInt(req.params.id));
    const updatedTaskData = req.body;
    if (taskId === -1) {
      return res.status(404).json({ msg: "Task not found" });
    }
    tasks[taskId] = { ...tasks[taskId], ...updatedTaskData };
    res.json({ msg: "Task updated successfully"});
  },
  patchTask: (req, res) => {
    const taskId = tasks.findIndex((task) => task.id === parseInt(req.params.id));
    if (taskId === -1) {
      return res.status(404).json({ msg: "Task not found" });
    }
    tasks[taskId].status = statuses.complete;
    res.json({ msg: `Task ${tasks[taskId].id} - ${tasks[taskId].title} completed successfully`});
  }
};

export default TasksController;
