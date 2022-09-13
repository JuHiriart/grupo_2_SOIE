<<<<<<< HEAD
module.export = (sequelize, dataTypes) => {
    let alias = "Times";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        option: {
            type: dataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: "Time",
        timesTamps: false
    };

    const Time = sequelize.define(alias, cols, config);

    return Time;
=======
module.exports = Time = (sequelize, dataTypes) => {
    let alias = "Times";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        option: {
            type: dataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: "Time",
        timestamps: false
    };

    const Time = sequelize.define(alias, cols, config);

    Time.associate = function (models) {

        Time.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_time"
        });

        
    }

    return Time;
>>>>>>> sprint-06
};