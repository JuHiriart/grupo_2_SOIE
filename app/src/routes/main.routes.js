const { Router } = require("express");
const con = require ('../controllers/main.js');
const routes = Router();

routes.get('/', con.home);

module.exports = routes;