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
        res.send(JSON.stringify(req.body));
        
        // let product = req.body;
        // product.id = models.products.getNewId();
        // models.products.add(product)
        
        // res.redirect(`/products/${product.id}/detail`);
    },

    abm:  (req,res) => {
        let products = models.products.index();
        res.render(views('products/productAbm'), {
            title : 'ABM productos',
            style : 'productAbm',
            products : products,
        })
    },
}