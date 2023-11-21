const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        
        firstname: 'Jordi',
        lastname: 'Galobart',
        email: 'jordi@lululu',

    })
})



module.exports = router;