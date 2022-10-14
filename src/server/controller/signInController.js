const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const UserRepository = require("../repositories/userRepository")

dotenv.config()

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class SignInController {
  async run(request, response) {
    const { email, password } = request.body
    const userRepository = new UserRepository()

    if (!email || !password) {
      return response.status(400).json({ message: 'Email and password are required.' })
    }

    const user = usersDatabase.users.find(usr => usr.email === email)

    if (!user) {
      return response.status(404).json({ message: 'User not found.' })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return response.status(401).json({ message: 'Invalid password.' })
    }

    const accessToken = jwt.sign(
      { email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: 300 }
    )
    
    const refreshToken = jwt.sign(
      { email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '4h' }
    )

    response.cookie(
      'token',
      refreshToken,
      { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }
    )

    const responseUser = {
      ...user,
      accessToken
    }

    delete responseUser.password
    delete responseUser.refreshToken

    try {
      await userRepository.update({ ...user, refreshToken })
      return response.status(200).json({ user: responseUser })
    } catch (error) {
      return response.status(500).json({
        message: 'It was not possible update user.',
        error: error.message
      })
    }
  }
}

module.exports = SignInController
