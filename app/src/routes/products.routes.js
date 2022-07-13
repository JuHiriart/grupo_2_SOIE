const conName  = 'products'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

routes.get('/'      , con.list     );
routes.get('/detail', con.detail   ); // HACER VISTA DETALLE DE PRODUCTO
routes.get('/newp'  , con.newp     );

module.exports = routes;