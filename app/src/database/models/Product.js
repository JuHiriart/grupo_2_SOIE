module.export = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING,
            allowNull: false


        },
        description: {
            type: dataTypes.STRING,
            allowNull: false

        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        img: {
            type: dataTypes.STRING,
            allowNull: false
        },
        id_type: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_time: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        off: {
            type: dataTypes.DECIMAL(10, 2),

        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }

    };

    let config = {
        tableName: "Produts",
        timesTamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
};