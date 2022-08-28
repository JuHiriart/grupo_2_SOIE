module.export = (sequelize, dataTypes) => {
    let alias = "Status";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: "Status",
        timesTamps: false
    };

    const Status = sequelize.define(alias, cols, config);

    return Status;
};