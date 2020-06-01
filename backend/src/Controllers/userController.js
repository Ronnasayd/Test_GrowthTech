class UserController {
  // return an user by id
  async show(req, res) {
    const user = req.users.filter((user) => {
      return parseInt(user.id) === parseInt(req.params.id);
    });
    res.send(user);
  }
}
module.exports = new UserController();
