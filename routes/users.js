var express = require('express')
var router = express.Router()

const userController = require('../controller/user.controller')


router.post("/", userController.createUser)
router.get("/", userController.getUserById)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)
router.patch("/:id", userController.patchPassword)
router.post("/login", userController.logInUser)

module.exports = router