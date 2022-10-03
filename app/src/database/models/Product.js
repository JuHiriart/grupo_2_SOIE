module.exports = Product = (sequelize, dataTypes) => {
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
        tableName: "Products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {

       Product.hasMany(models.ProductCart, {
           as: "productcart",
           foreignKey: "id_Products"
       });

       Product.belongsTo(models.Type, {
           as: "type",
           foreignKey: "id_type"
       });

       Product.belongsTo(models.Time, {
           as: "time",
           foreignKey: "id_time"
       })

    }

    return Product;
};