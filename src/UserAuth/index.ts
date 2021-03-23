//#TODO change variablees name in each index.ts for routes
export {};
const route = require('express').Router();
const controller = require('./UserAuthController')

route.post('/', controller.create )
route.post('/login', controller.login )
route.get('/', controller.read)
// route.post('/',controller.create)

module.exports = route