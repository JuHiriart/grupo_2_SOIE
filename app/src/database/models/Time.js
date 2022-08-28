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
};