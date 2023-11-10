const express = require('express')
const router = express.Router()

const tasks = [
    {
      title: "Preparar las maletas",
      description: "El viaje hacia marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
      status: "PENDING", //PENDING, IN PROGESS, COMPLETED
      datestart: "2023-11-08 22:00:00",
      dateend: "2023-12-08 22:00:00",
      id: "asd4251asd54",
      user: "albertsube",
      createdAt: "2023-11-10 22:03:00",
      modifiedAt: "2023-11-10 22:05:00",
      deletedAt: null,
    },
    {
      title: "Preparar las maletas",
      description: "El viaje hacia marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
      status: "PENDING", //PENDING, IN PROGESS, COMPLETED
      datestart: "2023-11-08 22:00:00",
      dateend: "2023-12-08 22:00:00",
      id: "qrewre4354r",
      user: "albertsube",
      createdAt: "2023-11-10 22:03:00",
      modifiedAt: "2023-11-10 22:05:00",
      deletedAt: null,
    },
    {
      title: "Preparar las maletas",
      description: "El viaje hacia marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
      status: "PENDING", //PENDING, IN PROGESS, COMPLETED
      datestart: "2023-11-08 22:00:00",
      dateend: "2023-12-08 22:00:00",
      id: "fhtrw687hfs",
      user: "albertsube",
      createdAt: "2023-11-10 22:03:00",
      modifiedAt: "2023-11-10 22:05:00",
      deletedAt: null,
    },
  ]

router.get('/', (req, res) => {
    console.log('query params', req.query)
    res.json(tasks)
  })
  
  router.get('/:id', (req,res) => {
    console.log('unique task', req.params, req.query)
    res.json(tasks[0])
  })

  router.post('/', (req,res) => {
    console.log('create task', req.body)
    res.json({
        msg: 'task created successfully'
    })
  })

  router.put('/:id', (req,res) => {
    console.log('update task', req.params, req.body)
    res.json({
        msg: 'task updated successfully'
    })
  })

  router.delete('/:id', (req,res) => {
    res.json({
        msg: "Task " + req.params.id + " has been deleted"
    })
  })

  module.exports = router