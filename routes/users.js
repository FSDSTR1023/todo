const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Jorge',
      lastName: 'Vivas',
      email: 'jjjjj@jkjjjj',
    },
  ]);
});

module.exports = router;
