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