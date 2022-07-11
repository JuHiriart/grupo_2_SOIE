const views = require('../modules/file.js');
const {data,renderCallback} = require('../modules/render')

module.exports = {
    productList: renderCallback('productList'),
    productDetail: (req,res) => res.render(views('products/productDetail')),
}