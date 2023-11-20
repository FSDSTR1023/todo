const express = require('express')
const router = express.Router()
  
const tasks =  [
    {
      "title":"Preparar maletas",
      "description": "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
      "status": "PENDING", //PENDING, IN PROGRESS, COMPLETED
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
      "status": "PENDING", //PENDING, IN PROGRESS, COMPLETED
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
      "status": "PENDING", //PENDING, IN PROGRESS, COMPLETED
      "datestart": "2023-11-08 22:00:00",
      "dateend": "2023-12-08 22:00:00",
      "id": "aaa6465425",
      "user": "mxubet",
      "createdAt": "2023-11-10 20:03:00",
      "modifiedAt":"2023-11-08 22:05:00",
      "deletedAt": null
    }
]   
   
  router.get('/', (req, res) => {
    res.json(tasks)
  })

  router.get('/:id', (req,res) => {
    res.json(tasks[0])
  })

  router.post('/', (req, res) => {
    console.log("task created", req.query,req.params,req.body)
    res.json({msg: 'task created succesfully'})
  })

  router.put('/:id', (req, res) => {
    console.log("task updated", req.query,req.params,req.body)
    res.json({msg: 'task updated succesfully'})
  })

  router.delete('/:id', (req,res) => {
    res.json({msg: req.params.id+" has been deleted"})
  })

module.exports = router