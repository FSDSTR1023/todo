import task from "../models/task.model.js";
import { statusTypes } from "../mock_data/tasks.data.js";
export async function createTask(req, res) {
    task.create(req.body)
        .then(taskInfo => {
            console.log(`Task create worked well: ${taskInfo}`)
            res.status(200).json(taskInfo)
        })
        .catch(error => {
            console.log(`Creating a new Task went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
        }

        );
}
export async function getTaskById(req, res) {
    task.findById(req.params.id)
        .then(taskInfo => {
            console.log(`Task create worked well: ${taskInfo}`)
            res.status(200).json(taskInfo)
        })
        .catch(error => {
            console.log(`Invalid ID for Task! Try again 😞 ${error}`)
            res.status(400).json(error)
        }

        );
}
export async function getTasks(req, res) {
    task.find({})
        .then(taskInfo => {
            console.log(`Tasks: ${taskInfo}`)
            res.status(200).json(taskInfo)
        })
        .catch(error => {
            console.log(`Getting Tasks went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
        }

        );
}
export async function updateTask(req, res) {

    task.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
            modifiedAt: Date.now()
        },
        {
            new: true
        }
    )
        .then(updatedTask => {
            console.log(`Updated Task: ${updatedTask}`)
            res.status(200).json(updatedTask)
        })
        .catch(error => {
            console.log(`Updated Task went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
        }

        );
}
export async function changeTaskStatus(req, res) {
    task.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: { status: req.body.status },
            modifiedAt: Date.now()
        },
        {
            new: true
        }

    )
        .then(updatedTask => {
            console.log(`Task status updated: ${updatedTask}`)
            res.status(200).json(updatedTask)
        })
        .catch(error => {
            console.log(`Updating Status went wrong! Try again 😞 ${error}`)
            res.status(400).json(error)
        });
}
export async function deleteTask(req, res) {
    task.findByIdAndDelete(req.params.id)
        .then((deletedTask) => {
            console.log("Deleted Task: ", deletedTask);
            res.status(200).json(deletedTask);
        })
        .catch((err) => {
            console.log("Error while deleting the Task: ", err);
            res.status(400).json(err);
        });
}
