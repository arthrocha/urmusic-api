const convert = require('./convert/index')
const express = require('express')
const emptyDir = require('../middlewares/emptyDir')
const router = express.Router()

router.use('/convert-mp3',emptyDir,convert)

module.exports = router

