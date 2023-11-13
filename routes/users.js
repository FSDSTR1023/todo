var express = require('express');
var router = express.Router();

router.get('/',(req, res) => {
    res.json({
        "user":"Joel Montilla"
    })
})


module.exports = router;