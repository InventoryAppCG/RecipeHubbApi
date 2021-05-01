export{}
const route = require('express').Router();
const controller = require('./CommentsController')
//get comments for a specific recipe
route.get('/:id', controller.get)
route.post('/', controller.store)

module.exports = route