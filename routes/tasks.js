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
        user: "egarcia",
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
        user: "egarcia",
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
    console.log("unique task",req.params, req.query, res.statusCode)
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json(tasks[0])
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "Task not found"})
    }
})

router.post('/', (req,res)=>{
    console.log("create task",req.query,req.params,req.body)
    switch (statusCode){
        case 201: res.json({msg: "task created succesfully"})
        case 400: res.json({msg: "You missed some parameters: parameter1, parameter2, ..."})
    }
    
})

router.put('/:id', (req,res)=>{
    console.log("update task",req.query,req.params,req.body)
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: "task updated succesfully"})
        case 400: res.json({msg: "You missed some parameters: parameter1, parameter2, ..."})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "Task not found"})
    }
})

router.delete('/:id', (req,res)=> {
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: req.params.id+" has been deleted"})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "Task not found"})
    }
})

router.patch('/:id', (req,res)=> {
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: "Task marked as completed"})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "Task not found"})
    }
})

module.exports = router