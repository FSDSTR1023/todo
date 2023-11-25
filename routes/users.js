const express = require('express')
const router = Router()

const userController = require('../controllers/users.controller')

router.post('/users',taskController.createUser )
router.get('/users', taskController.getUsers )
router.delete('/users/:id', taskController.deleteUserById )

module.exports = router;