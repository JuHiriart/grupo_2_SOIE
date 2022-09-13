const conName  = 'products'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const routes = Router();

//validaciones
const validations = require('../middlewares/validations.js');

/* get all products */
routes.get( '/'      , con.list       );
routes.get( '/abm'   , con.abm        );

/* create a new product */
routes.get( '/create'   , con.new        );
routes.post( '/'        ,validations.products , con.store.upload.single('img') , con.store.data );

/* show details of a product */
routes.get( '/:id/detail', con.detail );

/* edit a product's details */
routes.get( '/:id/edit', con.edit );
routes.put( '/:id', con.storeEdit.upload.single('img') , con.storeEdit.data );

/* delete a product */
routes.delete( '/:id' , con.delete );


module.exports = routes;