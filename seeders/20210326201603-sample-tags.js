"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Tags", [
      {
        title: "work",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "home",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "school",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Tags", null, {});
  },
};
