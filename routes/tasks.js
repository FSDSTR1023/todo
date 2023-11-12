const express = require('express');
const router = express.Router();

const tasks = require('../mock_data/tasks');

router.get('/', (req, res) => {
    res.json(tasks);
});
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.json(tasks[0]);
});
router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({ msg: 'Created Task' });
});
router.put('/:id', (req, res) => {
    res.json({ message: 'Updated Task Correctly' });
});

router.patch('/:id', (req, res) => {
    res.json({ msg: req.params.id + 'markred as done' });
});
router.delete('/:id', (req, res) => {
    res.json({ msg: req.params.id + 'task deleted succsefully' });
});

module.exports = router;