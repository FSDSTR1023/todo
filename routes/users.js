const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        firstname:"Enrique García",
        lastname: "García",
        email: "test@example.com"
    })
})

router.post('/login',(req,res)=>{
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: "Login succesful"})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "User not found"})
    }
})

module.exports = router