"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("cart", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        order: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_productCart: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        idUser: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        totalOrder: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },



      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cart");
  },
};