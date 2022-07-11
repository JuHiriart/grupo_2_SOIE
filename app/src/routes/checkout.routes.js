const { Router } = require("express");
const con = require ('../controllers/checkout.js');
const routes = Router();

routes.get('/', con.productCart)

module.exports = routes;