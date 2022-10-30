const jwt = require('jsonwebtoken')

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
  } catch {
    return response.status(403)
      .json({ message: 'You are not allowed to access this resource.' })
  }

  request.email = token.email

  next()
}

module.exports = validateToken
