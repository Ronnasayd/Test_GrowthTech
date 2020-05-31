const express = require('express')
const app = express()
const userRouter = require('./Routes/userRouter')
const postRouter = require('./Routes/postRouter')

app.use(express.json())

// Route for users
app.use('/users', userRouter)

// Route for post
app.use('/posts', postRouter)

app.listen(3000)
