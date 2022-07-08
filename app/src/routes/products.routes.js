const { Router } = require("express");
const con = require ('../controllers/products.js');
const routes = Router();

routes.get('/', con.productList);
routes.get('/detail', con.productDetail); // HACER VISTA DETALLE DE PRODUCTO

module.exports = routes;