const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        "user": "miquel xubet"
    })
})

module.exports = router