import { Router } from "express";
import users from "../models/users.model.js";
import { taskBodyValidation } from "../middleware/tasks.middleware.js";
const router = Router();

router.get('/', (req, res)=>{
  res.json({msg: "Login successful"})
});

export default router;