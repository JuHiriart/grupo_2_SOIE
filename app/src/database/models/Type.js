module.exports = Type = (sequelize, dataTypes) => {
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
        timeStamps: false
    };

    const Type = sequelize.define(alias, cols, config);

    Type.associate = function (models) {

        Type.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_type"
        });
        
    }

    return Type;
    
};