const views = require('../modules/file.js');
const db = require('../database/models');

module.exports = {
    home: async (req, res) => {

        const products = await db.Product.findAll();

        if (req.query && req.query.name) {
            products = products.filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1);
        }

        res.render( views('index'), {
            title : 'Home',
            style : 'index',
            userLogged : req.session.userLogged,
            products : products
        } );
    }
}
