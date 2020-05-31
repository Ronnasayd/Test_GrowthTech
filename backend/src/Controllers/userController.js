const client = require('../Services/client')

class UserController {
  // return all users
  async index (req, res) {
    const users = await client.getUsers()
    res.send(users.data)
  }

  // return one user by id
  async show (req, res) {
    const response = await client.getUsers()
    const users = response.data
    const user = users.filter((user, index) => {
      return parseInt(user.id) === parseInt(req.params.id)
    })
    res.send(user)
  }
}

module.exports = new UserController()
