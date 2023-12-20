import { Router } from 'express';
import { createUser, getUserById, getUserToLogin, getUsers } from '../controllers/user.controller.js';
const router = Router();

router.post('/register', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/login', getUserToLogin);


export default router;