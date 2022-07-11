const { Router } = require("express");
const routes = Router();

routes.use(require('../modules/public.js'));

const controller = require ('../controllers/products.js');

for (key in controller){
    routes.get(`/${key}`, controller[key]);
}

module.exports = routes;