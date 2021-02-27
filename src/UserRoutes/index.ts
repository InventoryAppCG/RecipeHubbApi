const route = require('express').Router();
const controller = require('./UserController')

//middleware
route.post('/', (controller.index))

module.exports = route