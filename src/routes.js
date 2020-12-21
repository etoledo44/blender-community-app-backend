const express = require('express')
const route = express.Router()


const RealeasesController = require('./Controllers/RealeasesController')


route.get('/', RealeasesController.index)


module.exports = route