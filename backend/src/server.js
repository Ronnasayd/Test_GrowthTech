const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./Routes/postRouter");
const userRouter = require("./Routes/userRouter");
const handleData = require("./Middlewares/dataMiddleware");

console.log(`running on port: ${process.env.PORT}\n`);

app.use(cors());
app.use(express.json());

app.use(handleData);

// Route for posts
app.use("/posts", postRouter);
// Route for users
app.use("/users", userRouter);
app.listen(process.env.PORT || 3333);
