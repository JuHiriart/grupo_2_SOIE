"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("users", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        birth: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        gender: {
          type: Sequelize.TEXT,
          allowNull: false,
        },

        img: {
          type: Sequelize.TEXT,
          allowNull: false, //Comentado hasta que solucionemos las tablas intermedias
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        direccion: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        telefono: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        category  : {
          type: Sequelize.TEXT,
          allowNull: false,
        },

      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};