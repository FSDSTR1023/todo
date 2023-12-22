const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);

router.get('/login', usersController.login);

router.post('/login', usersController.createUser);


module.exports = router;