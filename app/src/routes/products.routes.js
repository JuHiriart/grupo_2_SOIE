const conName  = 'products'

// importo el controlador en la variable con
const con = require(`../controllers/${conName}.js`);

// importo el router
const { Router } = require("express");
const authClientMiddleware = require("../middlewares/authClientMiddleware.js");
const routes = Router();

const checkCart = require("../middlewares/checkCart.js");


//validaciones
const validations = require('../middlewares/validations.js');

/* get all products */
routes.get( '/'      ,checkCart, con.list       );
routes.get( '/abm'   , con.abm        );

/* create a new product */
routes.get( '/create'   , con.new        );
routes.post( '/'        ,validations.products , con.store.upload.single('img') , con.store.data );

/* show details of a product */
routes.get( '/:id/detail',checkCart, con.detail );

/* edit a product's details */
routes.get( '/:id/edit', con.edit );
routes.put( '/:id', con.storeEdit.upload.single('img') , con.storeEdit.data );

/* delete a product */
routes.delete( '/:id' , con.delete );

/*adds a product to the cart*/
routes.post('/:id/detail', authClientMiddleware, checkCart, con.addCart);



module.exports = routes;