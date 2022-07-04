const { Router } = require("express");
const {cart} = require ('../controllers/checkout.js');
const routes = Router();

routes.get('/productCart', cart)

module.exports = routes;