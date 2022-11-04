const { Router } = require('express')
const AuthenticationController = require("./controller/authenticationController")
const SignUpController = require("./controller/signUpController")
const RefreshTokenController = require("./controller/refreshTokenController")
const SignInController = require("./controller/signInController")
const SummaryController = require("./controller/summaryController")
const validateToken = require("./middleware/validateAccessToken")
const SignOutController = require("./controller/signOutController")

const router = Router()

router.get('/authenticate', new AuthenticationController().run)
router.get('/refresh', new RefreshTokenController().run)
router.post('/signin', new SignInController().run)
router.post('/signup', new SignUpController().run)
router.post('/signout', new SignOutController().run)

router.get('/summary', validateToken, new SummaryController().run)

module.exports = router
