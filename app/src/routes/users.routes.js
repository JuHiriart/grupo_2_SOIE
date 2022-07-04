const { Router } = require("express");
const {login,signin} = require ('../controllers/users.js');
const routes = Router();



routes.use(require('../modules/public.js'));

routes.get('/logIn', login);
routes.get('/signIn', signin);

module.exports = routes;