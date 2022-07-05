const {renderCallback} = require('../modules/render')
const productsRenderData = require('../models/product.model');

module.exports = {
    productNew      : renderCallback('productNew'),
    productList     : renderCallback('productList' , productsRenderData ),
    productDetail   : renderCallback('productNew')
}