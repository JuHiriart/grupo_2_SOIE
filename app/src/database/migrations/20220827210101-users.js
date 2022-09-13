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
<<<<<<< HEAD
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
=======
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
>>>>>>> sprint-06
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

<<<<<<< HEAD
        img: {
=======
        image: {
>>>>>>> sprint-06
          type: Sequelize.TEXT,
          allowNull: false, //Comentado hasta que solucionemos las tablas intermedias
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
<<<<<<< HEAD
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
=======
        address: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        numberPhone: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_category  : {
          type: Sequelize.TEXT,
          
>>>>>>> sprint-06
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