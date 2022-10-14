const { Router } = require('express')
const AuthenticationController = require("./controller/authenticationController")
const SignUpController = require("./controller/signUpController")
const RefreshTokenController = require("./controller/refreshTokenController")
const SignInController = require("./controller/signInController")

const router = Router()

router.get('/authenticate', new AuthenticationController().run)
router.post('/signin', new SignInController().run)
router.post('/signup', new SignUpController().run)
router.get('/refresh', new RefreshTokenController().run)

module.exports = router
