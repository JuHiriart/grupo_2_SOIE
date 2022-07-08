const { Router } = require("express");
const con = require ('../controllers/users.js');
const routes = Router();

routes.get('/login', con.login);
routes.get('/signin', con.signin);

module.exports = routes;