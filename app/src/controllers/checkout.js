const { render } = require('ejs');
const {data,renderCallback} = require('../modules/render')

module.exports = {
    productCart: renderCallback('productCart')
}