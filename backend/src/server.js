const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./Routes/postRouter");
const userRouter = require("./Routes/userRouter");
const handlePosts = require("./Middlewares/postMiddleware");

app.use(cors());
app.use(express.json());

app.use(handlePosts);

// Route for posts
app.use("/posts", postRouter);
// Route for users
app.use("/users", userRouter);
app.listen(3333);
