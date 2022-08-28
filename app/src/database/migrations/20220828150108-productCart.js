"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("productCart", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        
        idProducts: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        totalItems: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("productCart");
  },
};