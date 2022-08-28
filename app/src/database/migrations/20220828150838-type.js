"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("type", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        
        description: { 
          type: Sequelize.TEXT,
          allowNull: false,
        },
        
        
      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("type");
  },
};