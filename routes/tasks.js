var express = require('express');
var router = express.Router();

const tasks = [
    {
      "title": "Preparar maletas",
      "description":"Preparar toda la ropa y ponerla en la maleta",
      "status": "PENDING",
      "datestart":"2023-11-08 20:03:54",
      "dateend":"2023-11-08 20:03:54",
      "id":"aaf54658",
      "user": "lestrange",
      "createdAt":"2023-11-08 20:03:54",
      "modifiedAt": "2023-11-08 20:03:54",
      "delitedAt": null,

    
      },
      {
        "title": "Preparar maletas",
        "description":"Preparar toda la ropa y ponerla en la maleta",
        "status": "PENDING",
        "datestart":"2023-11-08 20:03:54",
        "dateend":"2023-11-08 20:03:54",
        "id":"abcdefhijklm",
        "user": "lestrange",
        "createdAt":"2023-11-08 20:03:54",
        "modifiedAt": "2023-11-08 20:03:54",
        "delitedAt": null,
  
      
        }
    ]
router.get('/', (req, res) => {
    console.log("query params",req.query)
    res.json(tasks)
  })

  router.get('/:id',(req,res) => {
    console.log("unique task", req.params, req.query)
    res.json(tasks[0])
  })

  router.put('/:id', (req,res) => {
    console.log("update task", req.query, res.params, req.body)
    res.json({msg: req.params.id+" has been update."})
  })

  router.delete('/:id', (req,res) => {
    console.log("delete task", req.query, res.params, req.body)
    res.json({msg: req.params.id+" has been deleted."})
  })

  router.post('/:id', (req,res) => {
    console.log("create task", req.query, res.params, req.body)
    res.json({msg: req.params.id+" has been created."})
  })

  router.patch('/:id', (req,res) => {
    console.log("task patched", req.query, res.params, req.body)
    res.json({msg: req.params.id+" has been patched."})
  })

  module.exports = router;