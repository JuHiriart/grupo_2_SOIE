const views = require('../modules/file.js');

module.exports = {
    productList: (req,res) => {
        res.render(views('products/productDetail'), {
            title : 'Productos',
            style : 'productList',
        })
    },
    productDetail: (req,res) => res.render(views('products/productDetail')),
}