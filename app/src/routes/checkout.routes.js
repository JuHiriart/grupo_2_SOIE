const conName  = 'checkout'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

const authClientMiddleware = require("../middlewares/authClientMiddleware.js");

// importo el router
const { Router } = require("express");
const routes = Router();

routes.get('/', authClientMiddleware, con.productCart)

module.exports = routes;