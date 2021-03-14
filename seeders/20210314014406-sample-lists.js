"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Lists", [
      {
        ownerId: 1,
        title: "Today",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Tomorrow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Lists", null, {});
  },
};
