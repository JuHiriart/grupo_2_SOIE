const { Router } = require("express");
const {home,error} = require ('../controllers/main.js');
const routes = Router();


routes.get('/', home);
routes.get('/', error);

module.exports = routes;