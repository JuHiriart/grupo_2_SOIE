module.exports = User = (sequelize, dataTypes) => {
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
        id_category: {
            type: dataTypes.INTEGER

        },
        image: {
            type: dataTypes.STRING,

        },
        address: {
            type: dataTypes.STRING,

        },
        numberPhone: {
            type: dataTypes.STRING,

        },
        gender: {
            type: dataTypes.STRING,
        },

    };

    let config = {
        tableName: "Users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {

        User.belongsTo(models.Category, {
            as: "categoria",
            foreignKey: "id_category"
        });

    }
    return User;
};