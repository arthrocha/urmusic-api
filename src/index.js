const express = require("express");
const router = require('./routes/index')
const cors = require('cors');
const limit = require("./middlewares/rateLimiter");

const app = express()

app.use(limit)
app.use(cors())
app.use(router)

app.listen(3333, () => {
    console.log("server is running")
})
