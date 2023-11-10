const express = require('express');
const router = express.Router();

const tasks = require('../moke_upData/tasks');

router.get('/', (req, res) => {
  res.json(tasks);
});
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.json(tasks[0]);
});
router.put('/:id', (req, res) => {
  res.json({ message: 'Updtated Task Correctly' });
});
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Got a DELETED request for task' });
});
router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ msg: 'Got a POST request' });
});

router.patch('/:id', (req, res) => {
  res.json({ msg: 'Got a patch request' });
});

module.exports = router;
