const db = require('../database/models');

async function checkCart (req, res, next){

    if (req.session.userLogged != undefined) {
        
        let cart = await db.productcart.findAll({where: {
            id_user: req.session.userLogged.id
        }})
        req.session.userLogged.cartItems = cart.length;

    }


    next();


}

module.exports = checkCart;

