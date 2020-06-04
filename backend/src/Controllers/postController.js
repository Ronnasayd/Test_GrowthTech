class PostController {
  // return all filtered posts
  index(req, res) {
    res.send(req.groupPosts);
  }
  // return all posts
  indexGeneral(req, res) {
    res.send(req.generalPosts);
  }
}
module.exports = new PostController();
