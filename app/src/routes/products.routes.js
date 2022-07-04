const { Router } = require("express");
const {productList,productDetail} = require ('../controllers/products.js');
const routes = Router();


routes.use(require('../modules/public.js'));

routes.get('/productList', productList);
routes.get('/productDetail', productDetail); // HACER VISTA DETALLE DE PRODUCTO

module.exports = routes;