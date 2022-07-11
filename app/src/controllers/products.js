const views = require('../modules/file.js');
const {resolve} = require('path');

const models = {
    products : require('../models/product.model.js'),
}

module.exports = {
    productList: (req,res) => {
        res.render(views('products/productList'), {
            title : 'Productos',
            style : 'productList',
            products : models.products.index()
        })
    },
    productDetail: (req,res) => {
        res.render(views('products/productDetail'), {
            title : 'Detalle de producto',
            style : 'productDetail',
        })
    },
}