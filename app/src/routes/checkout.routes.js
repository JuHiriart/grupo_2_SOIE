const conName  = 'checkout'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

routes.get('/', con.productCart)

module.exports = routes;