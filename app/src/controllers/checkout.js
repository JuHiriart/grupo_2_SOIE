const views = require('../modules/file.js');
module.exports = {
    cart:(req,res) => res.sendFile(views('cart.html'))
}