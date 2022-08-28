"use strict";

const { index } = require("../../models/user.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    let users = index();
    
    await queryInterface.bulkInsert("category", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
};