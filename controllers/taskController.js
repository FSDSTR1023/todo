const Task = require('../models/tasks.model')

async function getAllTasks (req,res) {
    Tasks.find()
    .then((tasks) => {
        console.log('tasks found', tasks);
        res.status(200).json(tasks);
    })
    .catch((err) => {
        console.log(err, 'Oh no! Something went wrong! Try again.');
        res.status(400).json(err);
    });
}

async function getTaskById(req,res) {
    Task.findById(req.params.id)
    .then((task) => {
        console.log('This task matches the ID you entered: ', task)
        res.status(200).json(task)
    })
    .catch(err => {
        console.log('Hmmm... looks like this task ID does not exist: ', err)
        res.status(400).json(err)
    });
}

async function createTask (req,res) {
    Task.create(req,body)
    .then((task) => {
        console.log('Task created successfully!', task)
        res.status(200).json(task)
    })
    .catch(err => {
        console.log('Oh no! The task could not be created. Try again, you can do it!', err)
        res.status(400).json(err)
    });
}

async function updateTask (req,res) {
    Task.findByIdAndUpdate(req.params.id)
    .then((task) => {
        console.log('The following task has been updated: ', task)
        res.status(200).json(task)
    })
    .catch(err => {
        console.log('This task was not updated, sorry. ', err)
        res.status(400).json(err)
    });
}

async function deleteTask (req,res) {
    Task.findByIdAndRemove(req.params.id)
    .then((task) => {
        console.log('The task has been deleted successfully.', task)
        res.status(200).json(task)
    })
    .catch(err => {
        console.log('This task could not be deleted. Try again.', err)
        res.status(400).json(err)
    });
}

async function changeTaskStatus(req, res) {
    Task.findById(req.params.id, req.body, { new: true })
      .then((task) => {
        const userId = task.user;
  
        if (userId.toString() !== req.body.user) {
          return res.status(403).json({ msg: 'Forbidden' });
        }
        console.log('The task has been updated: ', task.status);
        task.save(task);
        res.status(200).json({ msg: 'Great! Status changed successfully' });
      })
      .catch((err) => {
        console.log(err, 'Something went wrong. Try again.');
        res.status(404).json({ msg: 'Task not found' });
      });
  }

module.exports = { 
    getAllTasks, 
    getTaskById,
    createTask,
    updateTask,
    deleteTask, 
    changeTaskStatus
};