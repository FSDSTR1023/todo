const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        "user":"Enrique García"
    })
})

module.exports = router