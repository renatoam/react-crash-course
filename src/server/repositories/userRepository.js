const fs = require('fs/promises')
const path = require('path')

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class UserRepository {
  async save(user) {
    usersDatabase.setUsers([...usersDatabase.users, user])
    delete user.password

    await fs.writeFile(
      path.join(__dirname, '../', 'model', 'users.json'),
      JSON.stringify(usersDatabase.users, null, 2)
    )
  }
}

module.exports = UserRepository
