const client = require("../Services/client");

class PostController {
  // return all posts
  async index(req, res) {
    res.send(req.groupPosts);
  }
}

module.exports = new PostController();
