const conName  = 'main'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

const checkCart = require("../middlewares/checkCart.js");


// importo el router
const { Router } = require("express");
const routes = Router();

routes.get('/',checkCart, con.home);

module.exports = routes;