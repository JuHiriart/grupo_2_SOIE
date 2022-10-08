const views = require('../modules/file.js');

const db = require('../database/models');

module.exports = {
    productCart: async (req, res) => {

        let cartProducts = await db.productcart.findAll({
            include: [{association: "producto"}],
            where: {
                id_user: req.session.userLogged.id
            }
        });


        let price = 0;
        let quantity = 0;
        cartProducts.forEach(element => {
            price += (element.producto.price * element.quantity);
            quantity += element.quantity;
        });

        res.render(views('productCart') , {
            title : "Carrito",
            style: 'productCart',
            userLogged : req.session.userLogged,
            cartProducts : cartProducts,
            price: price,
            quantity: quantity,
            
        })
    },

    delete: async (req, res) => {
        let cartItem = await db.productcart.findByPk(req.params.id);

        await cartItem.destroy();
        res.redirect('/checkout');
    }
}