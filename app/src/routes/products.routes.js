const conName  = 'products'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

/* get all products */
routes.get( '/'      , con.list       );
routes.get( '/abm'   , con.abm        );

/* create a new product */
routes.get( '/create'   , con.new        );
routes.post( '/'        , con.store.upload.single('img') , con.store.data );

/* show details of a product */
routes.get( '/:id/detail', con.detail );

/* edit a product's details */
routes.get( '/:id/edit', con.edit );
routes.put( '/:id', con.storeEdit.upload.single('img') , con.storeEdit.data );

module.exports = routes;