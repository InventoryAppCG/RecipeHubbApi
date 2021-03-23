export {}
const route = require('express').Router();
const controller = require('./UserAuthController')

route.post('/', controller.create)
// route.get('/', controller.read)
// route.put('/:id', controller.update)
// route.delete('/:id', controller.delete)

module.exports = route