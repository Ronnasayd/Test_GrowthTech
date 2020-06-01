class PostController {
  // return all filtered posts
  async index(req, res) {
    res.send(req.groupPosts);
  }
}
module.exports = new PostController();
