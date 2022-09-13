<<<<<<< HEAD
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
=======
module.exports = Status = (sequelize, dataTypes) => {
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
        timestamps: false
    };

    const Status = sequelize.define(alias, cols, config);

    Status.associate = function (models) {

        Status.hasMany(models.Cart, {
            as: "cart",
            foreignKey: "id_status"
        });
        
    }

    return Status;
};
>>>>>>> sprint-06
