module.exports = Type = (sequelize, dataTypes) => {
    let alias = "Types";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: "Type",
        timestamps: false
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