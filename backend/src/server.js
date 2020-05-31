const express = require('express')
const app = express()
const userRouter = require('./Routes/userRouter')

app.use(express.json())

// Route for users
app.use('/users', userRouter)

app.listen(3000)
