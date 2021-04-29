export{}
const route = require('express').Router();
const controller = require('./RecipePublicController')

route.get('/', controller.get)
route.post('/search', controller.search)

module.exports = route