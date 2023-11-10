const express = require('express');
const router = express.Router();

const tasks = [
  {
    title: 'Comprar leche',
    description: 'Ir al super y comprar leche',
    status: 'pending',
    dateStart: '2023-11-10',
    dateEnd: '2023-11-10',
    id: 'string',
    user: 'string',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    title: 'Comprar leche',
    description: 'Ir al super y comprar leche',
    status: 'pending',
    dateStart: '2023-11-10',
    dateEnd: '2023-11-10',
    id: 'string2',
    user: 'string',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];

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
