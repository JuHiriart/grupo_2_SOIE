const conName  = 'checkout'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

const authClientMiddleware = require("../middlewares/authClientMiddleware.js");
const checkCart = require("../middlewares/checkCart.js");

// importo el router
const { Router } = require("express");
const routes = Router();

routes.get('/', authClientMiddleware,checkCart , con.productCart)

routes.get('/delete/:id',authClientMiddleware, con.delete);

module.exports = routes;