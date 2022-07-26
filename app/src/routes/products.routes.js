const conName  = 'products'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

/* get all products */
routes.get( '/'      , con.list       );

/* create a new product */
routes.get( '/create'   , con.new        );
routes.post( '/'        , con.store      );

routes.get( '/abm'   , con.abm        );

routes.get( '/:id/detail', con.detail );

routes.get( '/:id/edit', con.detail );

module.exports = routes;