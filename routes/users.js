import { Router } from "express";
import users from "../data/users.data.js";
const router = Router();

router.get('/',(req,res)=>{
    res.json(users)
});

router.post('/login',(req,res)=>{
    res.json({msg: "Login succesful"})
});

export default router;