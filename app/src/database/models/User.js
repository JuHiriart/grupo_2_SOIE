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
};