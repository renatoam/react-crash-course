const { Router } = require('express')
const CreateUserController = require("./controller/createUserController")
const router = Router()

router.post('/users', new CreateUserController().run)

module.exports = router
