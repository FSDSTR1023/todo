const express = require('express')
const router = express.Router()

const tasks = [
    {
      title: "Preparar las maletas",
      description: "El viaje a marte va a durar unos cuantos meses. Lllevar ropa de verano e invierno",
      status: "PENDING", //PENDING, IN PROGRESS, COMPLETED
      datestart: "2023-11-08, 22:00:00",
      dateend: "2023-12-08, 22:00:00",
      id: "aaa340450934875",
      user: "sabinel",
      createdAt: "2023-11-08, 22:00:00",
      modifiedAt: "2023-11-08, 22:05:00",
      deletedAt: null
    },
    {
      title: "Preparar las maletas",
      description: "El viaje a marte va a durar unos cuantos meses. Lllevar ropa de verano e invierno",
      status: "PENDING", //PENDING, IN PROGRESS, COMPLETED
      datestart: "2023-11-08, 22:00:00",
      dateend: "2023-12-08, 22:00:00",
      id: "aaa340450934875",
      user: "sabinel",
      createdAt: "2023-11-08, 22:00:00",
      modifiedAt: "2023-11-08, 22:05:00",
      deletedAt: null
    }
  ]

router.get('/', (req, res) => {
    console.log("query params", req.query)
    res.json(tasks)
  })
  
  router.get('/:id', (req, res) => {
    console.log("unique task", req.params)
    res.json({
        title: "Preparar las maletas",
        description: "El viaje a marte va a durar unos cuantos meses. Lllevar ropa de verano e invierno",
        status: "PENDING", //PENDING, IN PROGRESS, COMPLETED
        datestart: "2023-11-08, 22:00:00",
        dateend: "2023-12-08, 22:00:00",
        id: "aaa340450934875",
        user: "sabinel",
        createdAt: "2023-11-08, 22:00:00",
        modifiedAt: "2023-11-08, 22:05:00",
        deletedAt: null
    })
  })

  router.post('/', (req, res) => {
    console.log("create task", req.query, req.params, req.body)
    res.json({msg: "task created successfully"})
  })

  router.put('/:id', (req, res) => {
    console.log("update task", req.query, req.params, req.body)
    res.json({msg: "task updated successfully"})
  })

  router.delete('/:id', (req, res) => {
    res.json({msg: req.params.id+"task has been deleted"})
  })

module.exports = router