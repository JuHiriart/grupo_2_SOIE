<<<<<<< HEAD
module.export = (sequelize, dataTypes) => {
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
            type: DataTypes.INTEGER

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

    return User;
=======
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

    };

    let config = {
        tableName: "Users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {

        // User.hasMany(models.Cart, {
        //     as: "cart",
        //     foreignKey: "id_user"
        // });
        
        // User.belongsTo(models.Category, {
        //     as: "category",
        //     foreignKey: "id_category"
        // });

    }

    return User;
>>>>>>> sprint-06
};