import express from 'express';
import {
  getAllUsers,
  getUserById,
  loginUser,
  createUser
} from '../controllers/usersController.js';

const router = express.Router();

// GET /user: Get all users
router.get('/', getAllUsers);

// GET /user/:id: Get user by id
router.get('/:id', getUserById);

// POST /user/login: Login user
router.post('/login', loginUser);

// POST route for creating a new user
router.post('/', createUser); 

export default router;

