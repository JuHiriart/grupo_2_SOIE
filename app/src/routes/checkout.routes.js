const { Router } = require("express");
const {productCart} = require ('../controllers/checkout.js');
const routes = Router();


routes.use(require('../modules/public.js'));

routes.get('/productCart', productCart)

module.exports = routes;