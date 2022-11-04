const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class AuthenticationController {
  async run(request, response) {
    const { email } = request.query

    if (!email) {
      return response.status(400).json({ message: 'Email is required.' })
    }

    const user = usersDatabase.users.find(usr => usr.email === email)

    if (!user) {
      return response.status(404).json({ message: 'User not found.' })
    }

    return response.status(200).json({
      user: {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname
    }})
  }
}

module.exports = AuthenticationController
