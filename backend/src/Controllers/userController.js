class UserController {
  index (req, res) {
    res.send({ msg: 'Hello World' })
  }
}

module.exports = new UserController()
