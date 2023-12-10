import express from 'express';
import userController from '../controllers/user.controller.js';
import validationMiddleware from '../middleware/validationMiddleware.js';

const router = express.Router();

// User creation route
router.post('/', validationMiddleware.validateUser, userController.createUser);

export default router;
