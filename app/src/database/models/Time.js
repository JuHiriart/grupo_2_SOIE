const func = (sequelize, dataTypes) => {
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

    Time.associate = function (models) {
        Time.hasMany(models.Products, {
            as: "products",
            foreigntKey: "id_time"
        })
    }

    return Time;
};

module.exports = func;