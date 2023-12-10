import express from 'express';
import { validateUser } from '../middleware/validationMiddleware.js';
import UserController from '../controllers/user.controller.js'; // Import UserController

const router = express.Router();

// User creation route
router.post('/', validateUser, UserController.createUser); // Use UserController.createUser

// GET route to fetch user information
router.get('/', UserController.getUserInfo); // Use UserController.getUserInfo

router.get('/tasks/user/:userId', (req, res) => {
    const userId = req.params.userId;
    // Retrieve tasks for the specified user and send the response
    // You can call a function to fetch tasks associated with this user
    // and then send them as a response here.
  });
export default router;
