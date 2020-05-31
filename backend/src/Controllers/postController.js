const client = require("../Services/client");

class PostController {
  // return all posts
  async index(req, res) {
    const posts = await client.getPosts();
    res.send(posts.data);
  }

  // return one post by id
  async show(req, res) {
    const response = await client.getPosts();
    const posts = response.data;
    const post = posts.filter((post, index) => {
      return parseInt(post.id) === parseInt(req.params.id);
    });
    res.send(post);
  }

  // return all posts from one user by id
  async user(req, res) {
    const response = await client.getPosts();
    const posts = response.data;
    const post = posts.filter((post, index) => {
      return parseInt(post.userId) === parseInt(req.params.id);
    });
    res.send(post);
  }
}

module.exports = new PostController();
