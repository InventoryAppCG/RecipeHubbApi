export {}
const route = require('express').Router();
const controller = require('./RecipeController')

route.post('/', controller.create)
route.get('/', controller.read)
route.get('/user-recipes/', controller.getRecipesById)
route.get('/:id', controller.readOne)
route.put('/:id', controller.update)
route.delete('/:id', controller.delete)

module.exports = route