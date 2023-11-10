const express = require('express')
const router = express.Router()

const tasks = [
    {
        title: "Preparar las maletas",
        description:  "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
        status: "PENDING", //PENDING, IN PROGRESS, COMPLETED
        datestart: "2023-11-08 22:00:00",
        dateend: "2023-12-08 22:00:00",
        id: "aaa12371232131",
        user: "jgalobart",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt : "2023-11-08 22:05:00",
        deletedAt: null
    },
    {
        title: "Preparar las maletas",
        description:  "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
        status: "PENDING", //PENDING, IN PROGRESS, COMPLETED
        datestart: "2023-11-08 22:00:00",
        dateend: "2023-12-08 22:00:00",
        id: "87y112312311231",
        user: "jgalobart",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt : "2023-11-08 22:05:00",
        deletedAt: null
    }
]

router.get('/', (req, res) => {
    console.log("query params", req.query)
    res.json(tasks)
})

router.get('/:id', (req,res)=> {
    console.log("unique task",req.params, req.query)
    res.json(tasks[0])
})

router.post('/', (req,res)=>{
    console.log("create task",req.query,req.params,req.body)
    res.json({msg: "task created succesfully"})
})

router.put('/:id', (req,res)=>{
    console.log("update task",req.query,req.params,req.body)
    res.json({msg: "task updated succesfully"})
})

router.delete('/:id', (req,res)=> {
    res.json({msg: req.params.id+" has been deleted"})
})

module.exports = router