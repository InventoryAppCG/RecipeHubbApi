export{}
const route = require('express').Router();
const controller = require('./CommentsController')
//get comments for a specific recipe
route.get('/:id', controller.get)
route.post('/', controller.store)
route.delete('/:id', controller.delete)

module.exports = route