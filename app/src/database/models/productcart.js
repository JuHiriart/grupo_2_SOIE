module.exports = productcart = (sequelize, dataTypes) => {
    let alias = "Produtcart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false


        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: "productcart",
        timestamps: false
    };

    const productcart = sequelize.define(alias, cols, config);

    productcart.associate = function (models) {

        productcart.belongsTo(models.Product, {
            as: "producto",
            foreignKey: "id_product"
        });

        productcart.belongsTo(models.User, {
            as: "cliente",
            foreignKey: "id_user"
        });

    }
    return productcart;
};
