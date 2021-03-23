export {}
const route = require('express').Router();
const controller = require('./UserController')

//middleware
route.use(require('../Middleware/UserToken'))


route.post('/', controller.create)
route.get('/', controller.read)
route.put('/:email', controller.update)
route.delete('/:email', controller.delete)

module.exports = route