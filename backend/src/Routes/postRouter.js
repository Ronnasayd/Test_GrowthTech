const express = require('express')
const router = express.Router()
const PostController = require('../Controllers/postController')

router.get('/', PostController.index)
router.get('/:id', PostController.show)
router.get('/user/:id', PostController.user)

module.exports = router
