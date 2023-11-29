const express = require ('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers)  //veure tots els usuaris
router.post('/create', userController.createUser)  //crear usuari
router.get('/:id', userController.getUserById) //buscar per usuari
router.post('/login', userController.loginUser) //loguear un usuari



module.exports = router