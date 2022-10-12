const { Router } = require('express')
const AuthenticationController = require("./controller/authenticationController")
const CreateUserController = require("./controller/createUserController")
const RefreshTokenController = require("./controller/refreshTokenController")

const router = Router()

router.get('/authentication', new AuthenticationController().run)
router.get('/refresh', new RefreshTokenController().run)
router.post('/users', new CreateUserController().run)

module.exports = router
