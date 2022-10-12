const { Router } = require('express')
const AuthenticationController = require("./controller/authenticationController")
const CreateUserController = require("./controller/createUserController")
const RefreshTokenController = require("./controller/refreshTokenController")
const SignInController = require("./controller/signInController")

const router = Router()

router.get('/authenticate', new AuthenticationController().run)
router.post('/signin', new SignInController().run)
router.get('/refresh', new RefreshTokenController().run)
router.post('/users', new CreateUserController().run)

module.exports = router
