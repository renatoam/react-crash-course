const bcrypt = require('bcrypt')
const { v4: uuid } = require('uuid')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const UserRepository = require("../repositories/userRepository")

dotenv.config()

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class SignUpController {
  async run(request, response) {
    const { email, password, ...rest } = request.body
    const userRepository = new UserRepository()

    if (!email || !password) {
      return response.status(400).json({ message: 'User and password are required.' })
    }

    const isThereUser = usersDatabase.users.find(user => user.email === email)

    if (isThereUser) return response.status(409).json({ message: 'User already exists.' })

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const accessToken = jwt.sign(
      { email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: 300 }
    )
      
    const refreshToken = jwt.sign(
      { email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1h' }
    )

    const id = uuid()
    const responseUser = {
      ...rest,
      email,
      id
    }
        
    const persistenceUser = {
      ...responseUser,
      password: hashedPassword,
      refreshToken
    }
    
    try {
      await userRepository.save(persistenceUser)

      response.cookie('token', refreshToken, { httpOnly: true })
      
      return response.status(200).json({ user: responseUser, accessToken, message: 'User has been created.' })
    } catch (error) {
      return response.status(500).json({ message: 'Something went wrong', error: error.message })
    }
  }
}

module.exports = SignUpController
