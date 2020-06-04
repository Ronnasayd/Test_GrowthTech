const axios = require("axios");
const NodeCache = require("node-cache");
const postCache = new NodeCache({ stdTTL: 5 * 60 });

const handleData = async (req, res, next) => {
  // verify users request in cache
  if (postCache.get("users") === undefined) {
    // if not in cache make the request
    const usersResponse = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    // add response to cache
    postCache.set("users", usersResponse.data);
  }

  // verify posts request in cache
  if (postCache.get("posts") === undefined) {
    // if not in cache make the request
    const postsResponse = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    // add response to cache
    postCache.set("posts", postsResponse.data);
  }

  // get data from cache
  const users = postCache.get("users");
  const posts = postCache.get("posts");

  const groupUsers = users.filter((user) => {
    return user.company.name.toLowerCase().includes("group");
  });
  let groupPosts = posts.filter((post) => {
    const groupUsersIds = groupUsers.map((user) => {
      return user.id;
    });
    return groupUsersIds.includes(post.userId);
  });

  groupPosts = groupPosts.map((post) => {
    const user = groupUsers.find((element) => element.id == post.userId);
    post.user = {
      name: user.name,
      company_name: user.company.name,
    };
    return post;
  });
  generalPosts = [...posts].map((post) => {
    const user = users.filter((user) => {
      return parseInt(user.id) === parseInt(post.userId);
    })[0];
    post.user = { company_name: user.company.name, name: user.name };
    return post;
  });

  req.posts = posts;
  req.users = users;
  req.groupUsers = groupUsers;
  req.groupPosts = groupPosts;
  req.generalPosts = generalPosts;
  next();
};
module.exports = handleData;
