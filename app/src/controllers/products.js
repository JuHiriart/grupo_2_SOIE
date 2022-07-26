const views = require('../modules/file.js');
const {resolve} = require('path');

const models = {
    products : require('../models/product.model.js'),
}


module.exports = {
    list: ( req, res) => {

        let products = models.products.index();

        if(req.query && req.query.name){
            products = products.filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
        }

        res.render(views('products/productList'), {
            title : 'Productos',
            style : 'productList',
            products : products
        })
    },
    detail: ( req, res) => {
        let product = models.products.getById(req.params.id);
        res.render(views('products/productDetail'), {
            style : 'productDetail',
            title : `SOIE - ${product.name}`,
            product : product,
        })
    },
    new: ( req, res) => {
        res.render(views('products/productNew'), {
            title : 'Nuevo producto',
            style : 'productNew',
        })
    },
    store: ( req, res) => {
        let product = req.body;
        product.id = models.products.getNewId();
        models.products.add(product)
        // res.send(JSON.stringify(req.body));
        res.redirect(`/products/${product.id}/detail`);
    },
}