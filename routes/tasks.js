var express = require('express')
var router = express.Router()

const taskController = require('../controller/tasks.controller')

router.post("/", taskController.createTask)
router.get("/", taskController.getTaskNoCompleted)
router.get("/:id", taskController.getTaskById)
router.put("/:id", taskController.updateTask)
router.delete("/:id", taskController.deleteTask)
router.patch("/:id", taskController.patchTask)

module.exports = router