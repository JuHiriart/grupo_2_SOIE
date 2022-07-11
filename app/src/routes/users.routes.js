const conName  = 'users'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

routes.get('/login', con.login);
routes.get('/signin', con.signin);

module.exports = routes;