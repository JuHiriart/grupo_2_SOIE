const views = require('../modules/file.js');
module.exports = {
    productList: (req,res) => res.render(views('products/productList')),
    productDetail: (req,res) => res.render(views('products/productDetail')),
}