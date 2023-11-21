const express = require('express')
const router = express.Router()

const tasks = require('../moke_upData/tasks');

router.get('/',(req,res)=>{
    res.json(tasks);
});

router.get('/:id',(req,res)=>{
    console.log("unique tasks", req.params, req.query, req.body)
    res.json(tasks[0]);
})

router.post('/', (req,res)=>{
    console.log("create tasks", req.params, req.query, req.body)
    res.json({msg: "task created succesfully"})
})

router.put('/:id',(req, res)=>{
    console.log("update tasks", req.params, req.query, req.body)
    res.json({msg: "task update succesfully"})
})

router.delete('/:id', (req, res)=>{
    res.jason({msg: req.params.id+" has been deleted"})
})
router.patch('/:id', (req, res) => {
    res.json({ msg: 'Task marked as completed' });
  });


module.exports = router