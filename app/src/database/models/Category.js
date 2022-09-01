const func = (sequelize, dataTypes) => {
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
        timesTamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Users, {
            as: "users",
            foreigntKey: "id_category"
        })
    }
    
    return Category;
};


module.exports = func;