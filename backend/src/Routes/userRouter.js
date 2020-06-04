const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/userController");

router.get("/:id", UserController.show);
router.get("/", UserController.index);

module.exports = router;
