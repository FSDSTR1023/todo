const express = require('express')
const router = express.Router()

const statuses = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN PROGRESS",
  COMPLETED: "COMPLETED",
};

const tasks =  [
    {
      "title":"Preparar maletas",
      "description": "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
      "status": statuses.PENDING, //PENDING, IN PROGRESS, COMPLETED
      "datestart": "2023-11-08 22:00:00",
      "dateend": "2023-12-08 22:00:00",
      "id": "aaa6465425",
      "user": "mxubet",
      "createdAt": "2023-11-10 20:03:00",
      "modifiedAt":"2023-11-08 22:05:00",
      "deletedAt": null
    },
    {
      "title":"Preparar las maletas",
      "description": "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
      "status": statuses.PENDING, //PENDING, IN PROGRESS, COMPLETED
      "datestart": "2023-11-08 22:00:00",
      "dateend": "2023-12-08 22:00:00",
      "id": "aaafd6239425",
      "user": "mxubet",
      "createdAt": "2023-11-10 20:03:00",
      "modifiedAt":"2023-11-08 22:05:00",
      "deletedAt": null
    },
    {
      "title":"Organizar las rutas",
      "description": "Establecer las paradas y los sitios a visitar cada día durante el viaje.",
      "status": statuses.IN_PROGRESS, //PENDING, IN PROGRESS, COMPLETED
      "datestart": "2023-11-08 22:00:00",
      "dateend": "2023-12-08 22:00:00",
      "id": "aaafd6451425",
      "user": "mxubet",
      "createdAt": "2023-11-10 20:03:00",
      "modifiedAt":"2023-11-08 22:05:00",
      "deletedAt": null
    },
    {
      "title":"Preparar la comida",
      "description": "Preparar despensa para varios días de comida.",
      "status": statuses.COMPLETED, //PENDING, IN PROGRESS, COMPLETED
      "datestart": "2023-11-08 22:00:00",
      "dateend": "2023-12-08 22:00:00",
      "id": "aagda6446765425",
      "user": "mxubet",
      "createdAt": "2023-11-10 20:03:00",
      "modifiedAt":"2023-11-08 22:05:00",
      "deletedAt": null
    }
]   
   
  router.get('/', (req, res) => {
    const onlyPendingTasks = tasks.filter((task) => {
    return task.status !== statuses.COMPLETED;
  });
    res.json(onlyPendingTasks);
  });

  router.get('/:id', (req, res) => {
    const taskId = req.params.id;

    const taskById = tasks.find((task) => {
      return task.id.toString() === taskId;
    });

    if (!taskById) {
      return res.status(404).send("Task not found");
    }

    res.json(taskById);
  });

  router.post('/', (req, res) => {
    console.log("create task", req.query,req.params,req.body)
    res.json({msg: 'task created succesfully'})
  })

  router.put('/:id', (req, res) => {
    console.log("update task", req.query,req.params,req.body)
    res.json({msg: 'task updated succesfully'})
  })

  router.delete('/:id', (req,res) => {
    res.json({msg: req.params.id+" has been deleted"})
  })

module.exports = router