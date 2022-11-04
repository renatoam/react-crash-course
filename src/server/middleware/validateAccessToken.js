const jwt = require('jsonwebtoken')

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

const validateToken = (request, response, next) => {
  const authorization = request.headers['authorization']

  if (!authorization) {
    return response.status(401).json({ message: 'You do not have access.' })
  }

  const [, bearerToken] = authorization.split(' ')

  let token

  try {
    token = jwt.verify(
      bearerToken,
      process.env.ACCESS_TOKEN_SECRET
    )
  } catch (error) {
    const cookies = request.cookies
    const refreshToken = cookies?.token
    const user = usersDatabase.users.find(usr => usr.refreshToken === refreshToken)

    if (!user) {
      return response.status(403)
        .json({ message: 'You are not allowed to access this resource.' })
    }

    token = {
      email: user.email
    }
  }

  request.email = token.email

  next()
}

module.exports = validateToken
