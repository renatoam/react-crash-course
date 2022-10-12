const fs = require('fs/promises')
const path = require('path')

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class UserRepository {
  async save(user) {
    usersDatabase.setUsers([...usersDatabase.users, user])

    await fs.writeFile(
      path.join(__dirname, '../', 'model', 'users.json'),
      JSON.stringify(usersDatabase.users, null, 2)
    )
  }
  
  async update(user) {
    const filteredUsers = usersDatabase.filter(usr => usr.email !== user.email)
    usersDatabase.setUsers([...filteredUsers, user])

    await fs.writeFile(
      path.join(__dirname, '../', 'model', 'users.json'),
      JSON.stringify(usersDatabase.users, null, 2)
    )
  }
}

module.exports = UserRepository
