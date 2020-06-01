const express = require("express");
const router = express.Router();
const PostController = require("../Controllers/postController");

router.get("/", PostController.index);

module.exports = router;
