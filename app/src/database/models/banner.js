module.exports = banner = (sequelize, dataTypes) => {
    let alias = "banner";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        img: {
            type: dataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: "banner",
        timestamps: false
    };

    const banner = sequelize.define(alias, cols, config);


    return banner;
    
};