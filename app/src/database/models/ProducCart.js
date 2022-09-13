<<<<<<< HEAD
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

    return ProductCart;
};
=======
module.exports = ProductCart = (sequelize, dataTypes) => {
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
        timestamps: false
    };

    const ProductCart = sequelize.define(alias, cols, config);

    ProductCart.associate = function (models) {

        ProductCart.belongsTo(models.Product, {
            as: "products",
            foreignKey: "id_Products"
        });

        ProductCart.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "id_ProductCart"
        });

    }
    return ProductCart;
};

>>>>>>> sprint-06
