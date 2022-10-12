const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class RefreshTokenController {
  run(request, response) {
    const cookies = request.cookies
    const refreshToken = cookies?.token

    if (!refreshToken) {
      return response.status(401).json({ message: 'You do not have access.' })
    }

    const user = usersDatabase.users.find(usr => usr.refreshToken === refreshToken)

    if (!user) {
      return response.status(403).json({ message: 'You are not allowed.' })
    }

    try {
      const decodedToken = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      )

      const accessToken = jwt.sign(
        { email: decodedToken.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: 300 }
      )

      return response.status(200).json({ accessToken })
    } catch (error) {
      return response.status(403).json({ message: 'You are not allowed.' })
    }
  }
}

module.exports = RefreshTokenController
