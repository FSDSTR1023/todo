const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/user', userController.createUser);



//poner en app.js: const userRoutes = require('./routes/user.routes');
//app.use('/user', userRoutes);

module.exports = router;
