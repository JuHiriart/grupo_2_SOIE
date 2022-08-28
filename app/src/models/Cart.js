module.export =(sequelize, dataTypes) => {
    let alias="Carts";
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
    
    
        },
        order:{
            type: dataTypes.INTEGER,
            allowNull: false
    
    
        },
       id_User: {
            type:dataTypes.INTEGER,
            allowNull: false
    
        },
        id_ProductCart: {
            dtype:dataTypes.INTEGER,
            allowNull: false
    
        },
        totalOrder: {
            type:dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
       date: {
            type:dataTypes.DATE,
            allowNull: false
        },
        id_status: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    
    };
    
    let config = {tableName:"Cart",
        timesTamps:false
    };
    
        const Cart = sequelize.define(alias,cols,config);
    
        return Cart;
    };