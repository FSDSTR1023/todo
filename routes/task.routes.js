const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('TASK LIST')
})

module.exports = router;