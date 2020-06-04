const express = require("express");
const router = express.Router();
const PostController = require("../Controllers/postController");

router.get("/", PostController.index);
router.get("/general", PostController.indexGeneral);

module.exports = router;
