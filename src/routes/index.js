const convert = require('./convert/index')
const express = require('express')
const router = express.Router()

router.use('/convert-mp3',convert)

module.exports = router

