const { err } = require("console");

const task = require("../models/tasks.model.js");

// Crear una Tarea
async function createTask(req, res) {
  task
    .create(req.body)
    .then((tasksDoc) => {
      console.log(`Tarea creada correctamente ${tasksDoc}`);
      res.status(201).json(tasksDoc);
    })
    .catch((err) => {
      console.log(`Error al crear la tarea, prueba de nuevo ${err}`);
      res.status(400).json(err);
    });
}

// Obtener todas las Tareas

async function getAllTasks(req, res) {
  task
    .find({})
    .then((tasksDoc) => {
      console.log(`Tareas obtenidas correctamente ${tasksDoc}`);
      res.status(200).json(tasksDoc);
    })
    .catch((err) => {
      console.log(
        `Error al obtener todas las Tareas, intentalo de nuevo ${err}`
      );
      res.status(400).json(err);
    });
}

// Obtener una Tarea por su ID

async function getTaskById(req, res) {
  task
    .findById(req.params.id)
    .then((tasksDoc) => {
      console.log(`Tarea obtenida correctamente ${tasksDoc}`);
      res.status(200).json(tasksDoc);
    })
    .catch((err) => {
      console.log(`Error al obtener la tarea, intentalo de nuevo ${err}`);
      res.status(400).json(err);
    });
}

// Actualizar una Tarea por su ID

async function updateTask(req, res) {
  task
    .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((updatedTask) => {
      console.log(`Tarea actualizada correctamente ${updatedTask}`);
      res.status(200).json(taskDoc);
    })
    .catch((err) => {
      console.log(`Error al actualizar la tarea, intentalo de nuevo ${err}`);
      res.status(400).json(err);
    });
}

// Eliminar una Tarea por su ID

async function deleteTask(req, res) {
  task
    .findByIdAndDelete(req.params.id)
    .then((deleteTask) => {
      console.log(`Tarea eliminada correctamente ${deleteTask}`);
      res.status(200).json(deleteTask);
    })
    .catch((err) => {
      console.log(`Error al eliminar la tarea, intentalo de nuevo ${err}`);
      res.status(400).json(err);
    });
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
