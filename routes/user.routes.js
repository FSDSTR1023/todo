const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers); //así obtenemos todos los usuarios

router.post('/', userController.createUser); 

router.get('/:id', userController.getUserById);

router.post('/login', userController.loginUser);

module.exports = router