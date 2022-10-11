const fs = require('fs/promises')
const path = require('path')
const bcrypt = require('bcrypt')
const { v4: uuid } = require('uuid')

const usersDatabase = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

class CreateUserController {
  async run(request, response) {
    const { email, password, ...rest } = request.body

    if (!email || !password) {
      return response.status(400).json({ message: 'User and password are required.' })
    }

    const isThereUser = usersDatabase.users.find(user => user.email === email)

    if (isThereUser) return response.status(409).json({ message: 'User already exists.' })

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { id: uuid(), email, password: hashedPassword, ...rest }

    usersDatabase.setUsers([...usersDatabase.users, newUser])

    delete newUser.password

    try {
      await fs.writeFile(
        path.join(__dirname, '../', 'model', 'users.json'),
        JSON.stringify(usersDatabase.users, null, 2)
      )
      return response.status(200).json({ user: newUser, message: 'User has been created.' })
    } catch (error) {
      return response.status(500).json({ message: 'Something went wrong', error: error.message })
    }
  }
}

module.exports = CreateUserController
