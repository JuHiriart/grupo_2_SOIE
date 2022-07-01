const views = require('../modules/file.js');
module.exports = {
    productList: (req,res) => res.sendFile(views('products/productList.html')),
    productDetail: (req,res) => res.sendFile(views('products/productDetail.html')),
}