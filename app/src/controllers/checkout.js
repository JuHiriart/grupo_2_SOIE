const views = require('../modules/file.js');
module.exports = {
    cart:(req,res) => res.render(views('cart'))
}