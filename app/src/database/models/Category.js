module.exports = Category = (sequelize, dataTypes) => {
    let alias = "Categories";
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
        tableName: "Category",
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {

        Category.hasMany(models.User, {
            as: "users",
            foreignKey: "id_category"
        })
        
    }
    
    return Category;
};