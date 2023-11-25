import { Router } from 'express'
import userController from '../controllers/userController.js'

const router = Router()

router.get('/', userController.getUsers)
router.post('/:id', userController.verifyUser)
router.post('/', userController.createUser)

export default router