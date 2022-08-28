"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("products", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        description: { 
          type: Sequelize.TEXT,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        off: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        img: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        type: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        timeMinutes: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        active: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },
        
      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};