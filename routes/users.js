import { Router } from 'express'
import users from '../data/users.data.js'

const router = Router()

router.get('/', (req, res) => {
    res.json({
        user: "albertsube"
    })
  })
  

  export default router