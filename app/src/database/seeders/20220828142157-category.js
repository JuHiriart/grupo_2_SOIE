"use strict";

module.exports = {

  async up(queryInterface, Sequelize) {

    let categories = [
      {
        description: "Usuario comun",
        id: 1,
      },
      {
        description: "Administrador",
        id: 2,
      },
      {
        description: "Super administrador",
        id: 3,
      },
    ];
    
    await queryInterface.bulkInsert("category", categories , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
  
};