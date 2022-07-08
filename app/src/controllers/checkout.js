const views = require('../modules/file.js');

module.exports = {
    productCart: (req, res) => {
        res.render(views('productCart') , {
            title : "Cart",
            style : 'cart',
        })
    }
}