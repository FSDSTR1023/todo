const Task = require('../models/task.model');

async function createTask(req, res){
    Task.create(req.body)
    .then((task)=>{
        console.log ('task created', task);
        res.status(200).json(task);
    })
    .catch((err)=> {
        console.log(err, ' <--- error y que intentes de nuevo por que algo fue mal');
        res.status(400).json(err);
    });
    
}
async function getAllTasks(req, res){
    Task.find()
    .then((tasks)=>{
        console.log('task found', tasks);
        res.status(200).json(tasks);
    })
    .catch((err)=> {
        console.log(err, ' <--- error y que intentes de nuevo por que algo fue mal');
        res.status(400).json(err);
    });

}
async function updateTask(req, res){
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true})
    .then((task)=>{
        console.log('task updated',task);
        res.status(200).json(task);
    })
    .catch((err)=> {
        console.log(err, ' <--- error y que intentes de nuevo por que algo fue mal');
        res.status(400).json(err);
    });
}

async function getTaskById(req, res){
    Task.findById(req.params.id)
    .then((task)=> {
        console.log('task found', task);
        res.status(200).json(task);

    })
    .catch((err)=> {
        console.log(err, ' <--- error y que intentes de nuevo por que algo fue mal');
        res.status(400).json(err);
    });
}
async function deleteTask(req, res){
    Task.findByIdAndDelete(req.params.id)
    .then((task)=> {
        console.log('task delete', task);
        res.status(200).json(task);
    })
    .catch((err)=> {
        console.log(err, ' <--- error y que intentes de nuevo por que algo fue mal');
        res.status(400).json(err);
    });


}
async function changeStatusTask(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((task) => {
        const userId = task.user;
        console.log('userId:', userId);
  
        if (userId.toString() !== req.body.user) {
          return res.status(403).json({ msg: 'Forbidden' });
        }
        console.log('status Changed to:', task.status, 'for task:', task._id);
        task.save(task);
        res.status(200).json({ msg: 'Status changed' });
      })
      .catch((err) => {
        console.log(err, ' <---- error try again something went wrong');
        res.status(404).json({ msg: 'Task not found' });
      });
  }
    
module.exports = { createTask, getAllTasks, updateTask, getTaskById, changeStatusTask, deleteTask}; 