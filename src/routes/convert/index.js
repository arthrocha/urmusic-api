const express = require('express')
const convert = express.Router()
const convertRequestController = require('../../controllers/convertController')

convert.get('/:artist_or_music',convertRequestController)

module.exports = convert

