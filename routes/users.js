import { Router } from "express";
import users from "../data/users.data.js";
const router = Router();

router.get('/',(req,res)=>{
    res.json(users)
})

router.post('/login',(req,res)=>{
    const statusCode = parseInt(res.statusCode);
    switch (statusCode){
        case 200: res.json({msg: "Login succesful"})
        case 403: res.json({msg: "Forbidden"})
        case 404: res.json({msg: "User not found"})
    }
})

export default router;