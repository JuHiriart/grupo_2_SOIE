module.export = (sequelize, dataTypes) => {
    let alias = "Types";
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
        tableName: "Type",
        timesTamps: false
    };

    const Type = sequelize.define(alias, cols, config);
       Type.associate = function (models) {
        Type.hasMany(models.Products, {
            as: "products",
            foreigntKey: "id_types"
        })
    }
    return Type;
};
