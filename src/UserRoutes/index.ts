const route = require('express').Router();
const controller = require('./UserController.ts')

//middleware
route.post('/', (controller.index))

module.exports = route