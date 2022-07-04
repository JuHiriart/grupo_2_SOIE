const { Router } = require("express");
const {cart} = require ('../controllers/checkout.js');
const routes = Router();


routes.use(require('../modules/public.js'));

routes.get('/productCart', cart)

module.exports = routes;