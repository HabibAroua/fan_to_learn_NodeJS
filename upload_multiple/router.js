const route = require('express').Router();
const controller = require('./controller');
//routes
route.get('/', controller.home)

module.exports = route;