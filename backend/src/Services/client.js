const axios = require('axios')

module.exports = {
  getUsers: async () => {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/users'
    )
    return response
  },

  getPosts: async () => {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/posts'
    )
    return response
  }
}
