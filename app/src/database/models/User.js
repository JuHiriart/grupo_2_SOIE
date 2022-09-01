const func = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true


        },
        firstName: {
            type: dataTypes.STRING,
            allowNull: false


        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false

        },
        birth: {
            type: dataTypes.DATE,
            allowNull: false

        },
        email: {
            type: dataTypes.STRING,

        },
        password: {
            type: dataTypes.STRING,
        },
        idCategory: {
            type: dataTypes.INTEGER

        },
        image: {
            type: dataTypes.STRING,

        },
        adress: {
            type: dataTypes.STRING,

        },
        numberPhone: {
            type: dataTypes.STRING,

        },

    };

    let config = {
        tableName: "Users",
        timesTamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Cart, {
            as: "cart",
            foreigntKey: "id_user"
        }),
            Category.belongsTo(models.Category, {
                as: "category",
                foreigntKey: "id_category"
            })

    }

    return User;
};

module.exports = func;