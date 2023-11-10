const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        title: "Preparar las maletas",
        description: "El viaje va a durar varios meses, preparar ropa para invierno y verano",
        status: "PENDING", //PENDING, IN_PROGRESS, COMPLETED  
        datestart: "",
        dateend: "",
        id: "ASDFLKJ23475892",
        user: "juanmm",
        createdAt: "",
        modifiedAt: "",
        deletedAt: null
    },
    {
        title: "Preparar las maletas",
        description: "El viaje va a durar varios meses, preparar ropa para invierno y verano",
        status: "PENDING", //PENDING, IN_PROGRESS, COMPLETED  
        datestart: "",
        dateend: "",
        id: "ASDFLKJ23475892",
        user: "juanmm",
        createdAt: "",
        modifiedAt: "",
        deletedAt: null
    })
})

router.get('/:id', (req, res) => {
    res.json({
        title: "Preparar las maletas",
        description: "El viaje va a durar varios meses, preparar ropa para invierno y verano",
        status: "PENDING", //PENDING, IN_PROGRESS, COMPLETED  
        datestart: "",
        dateend: "",
        id: "ASDFLKJ23475892",
        user: "juanmm",
        createdAt: "",
        modifiedAt: "",
        deletedAt: null
    })
})

router.post('/', (req, res) => {
    console.log("Create task: ",req.query, req.params, req.body);
    res.json({msg: "The task was created succesfully"})
})

router.put('/:id', (req, res) => {
    console.log("Update task: ",req.query, req.params, req.body);
    res.json({msg: "The task was updated succesfully"})
})

router.delete('/:id', (req, res) => {
    res.json({mes: req.params.id+" ha sido eliminada"})
})

module.exports = router;