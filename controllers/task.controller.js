const Task = require('../models/task.model');

async function createTask(req, res){
    Task.create(req.body)
        .then((task) => {
            console.log('task created', task);
            res.status(200).json(task);
        })
        .catch((err) => {
            console.log(err, ' <---- intentade nuevo porque algo fue mal')
            res.status(400).json(err);
        })
}

module.exports = {createTask}

