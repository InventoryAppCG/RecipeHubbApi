const route = require('express').Router();
const controller = require('./RecipeController')

//middleware
route.use(require('../Middleware/UserToken'))

route.post('/', controller.create)
route.get('/', controller.read)
route.get('/:id', controller.readOne)
route.put('/:id', controller.update)
route.delete('/:id', controller.delete)

module.exports = route