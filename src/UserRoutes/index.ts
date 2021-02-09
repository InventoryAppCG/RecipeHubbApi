const route = require('express').Router();
const controller = require('./UserController.ts')

route.post('/', (controller.index))

module.exports = route