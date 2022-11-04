const UserRepository = require("../repositories/userRepository")

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class SignOutController {
  async run (request, response) {
    const cookies = request.cookies
    const refreshToken = cookies?.token
    const userRepository = new UserRepository()

    if (!refreshToken) {
      return response.sendStatus(204)
    }

    const user = usersDatabase.users.find(usr => usr.refreshToken === refreshToken)

    if (!user) {
      response.clearCookie('token', { httpOnly: true })
      return response.sendStatus(204)
    }

    try {
      await userRepository.update({ ...user, refreshToken: '' })
      response.clearCookie('token', { httpOnly: true })
      return response.sendStatus(204)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'Não foi possível fazer logout.' })
    }
  }
}

module.exports = SignOutController
