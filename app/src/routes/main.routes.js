const { Router } = require("express");
const {home} = require ('../controllers/main.js');
const routes = Router();

routes.get('/', home);

module.exports = routes;