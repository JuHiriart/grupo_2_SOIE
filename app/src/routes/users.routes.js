const { Router } = require("express");
const con = require ('../controllers/users.js');
const routes = Router();

routes.get('/logIn', con.login);
routes.get('/signIn', con.signin);

module.exports = routes;