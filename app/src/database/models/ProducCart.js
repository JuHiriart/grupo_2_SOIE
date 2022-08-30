module.export = (sequelize, dataTypes) => {
    let alias = "ProdutCarts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false


        },
        id_Products: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        totalItems: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: "ProdutCart",
        timesTamps: false
    };

    const ProductCart = sequelize.define(alias, cols, config);
      ProductCart.associate = function (models) {
        ProductCart.belongsTo(models.Product, {
            as: "products",
            foreigntKey: "id_Products"
        }),

        Product.belongsTo(models.Cart, {
            as: "cart",
            foreigntKey: "id_ProductCart"
        })

    }
    return ProductCart;
};
