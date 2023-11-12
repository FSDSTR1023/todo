const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            name: 'John',
            lastName: 'Doe',
            email: 'johndoe@doecompany.com',
        },
    ]);
});

module.exports = router;