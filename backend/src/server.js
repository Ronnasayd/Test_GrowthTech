const express = require("express");
const app = express();
const postRouter = require("./Routes/postRouter");
const handlePosts = require("./Middlewares/postMiddleware");

app.use(express.json());

app.use(handlePosts);

// Route for posts
app.use("/posts", postRouter);

app.listen(3000);
