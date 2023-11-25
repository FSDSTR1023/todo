const Task = require('../models/tasks.model')

async function createTask(req,res) {
    Task.create(req.body)
        .then(taskDoc => {
            console.log(`Task create worked well: ${taskDoc}`)
            res.status(200).json(taskDoc)
        })
        .catch(error => {
            console.log(`Creating a new task went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
            }
        );
}

async function updateTask(req,res) {
    Task.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        { 
          new: true  //You should set the new option to true to return the document after update was applied.
        }
        )
        .then(updatedTask => {
            console.log('Updated task: ', updatedTask)
            res.status(200).json(updatedTask)
        })
        .catch(err => {
            console.log('Error while getting the task: ', err)
            if (err.name === 'ValidationError') {
                res.status(400).json({ error: 'You missed some parameters: title, description, datestart o dateend' }); // 400 Bad Request
                } else if (err.name === 'ForbiddenError') {
                res.status(403).json({ error: 'Forbidden' }); // 403 Forbidden
                } else if (err.name === 'NotFoundError') {
                res.status(404).json({ error: 'Task Not Found.' }); // 404 Not Found
                } else {
                res.status(500).json({ error: 'Internal Error Server.' }); // 500 Internal Server Error
                }
            }
        );
}

async function getTasks(req,res) {
    Task.find({
        status: { $in: ["pending", "in-progress"] }
    })
        .then(taskDocs => {
            console.log('Found this: ', taskDocs)
            res.status(200).json(taskDocs)
            }
            )
        .catch(err => {
            console.log('Error while getting the tasks: ', err)
            res.status(400).json(err)
        });
}

async function getTaskById(req,res) {
    Student.findById(req.params.id)
        .then(taskDoc => {
            console.log('Found this task by their ID: ', taskDoc)
            res.status(200).json(taskDoc)
            })
        .catch(err => {
            console.log('Error while getting the task: ', err)
            if (err.name === 'ValidationError') {
                res.status(400).json({ error: 'Bad Request.' }); // 400 Bad Request
                } else if (err.name === 'ForbiddenError') {
                res.status(403).json({ error: 'Forbidden' }); // 403 Forbidden
                } else if (err.name === 'NotFoundError') {
                res.status(404).json({ error: 'Task Not Found.' }); // 404 Not Found
                } else {
                res.status(500).json({ error: 'Internal Error Server.' }); // 500 Internal Server Error
                }
            }
            );
}

async function patchTaskById(req,res) {
        Task.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body.status === 'completed'
            },
            { 
                new: true  //You should set the new option to true to return the document after update was applied.
            }
            )
            .then(updatedTask => {
                console.log('task completed: ', updatedTask)
                res.status(200).json(updatedTask)
            })
            .catch(err => {
                console.log('Error while updating the student: ', err)
                if (err.name === 'ForbiddenError') {
                    res.status(403).json({ error: 'Forbidden' }); // 403 Forbidden
                    } else if (err.name === 'NotFoundError') {
                    res.status(404).json({ error: 'Task Not Found.' }); // 404 Not Found
                    } else {
                    res.status(500).json({ error: 'Internal Error Server.' }); // 500 Internal Server Error
                    }
            });
    }

async function deleteTaskById(req,res) {
Task.findByIdAndDelete(req.params.id) // .findByIdAndRemove() works the same as .findByIdAndDelete()
  .then(taskDoc => {
    console.log(`Deleted task with id: `, taskDoc)
    res.status(200).json(taskDoc)
    })
  .catch(err => {
    console.log('Error while deleting one task: ', err)
    if (err.name === 'ForbiddenError') {
        res.status(403).json({ error: 'Forbidden' }); // 403 Forbidden
        } else if (err.name === 'NotFoundError') {
        res.status(404).json({ error: 'Task Not Found.' }); // 404 Not Found
        } else {
        res.status(500).json({ error: 'Internal Error Server.' }); // 500 Internal Server Error
        }
    })
  }

module.exports = {
    createTask,
    updateTask,
    getTasks,
    getTaskById,
    patchTaskById,
    deleteTaskById,
}