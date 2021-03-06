"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Users", [
      {
        name: "Harry",
        email: "harry.potter@hogwarts.edu",
        isDarkModeEnabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hermione",
        email: "hermione.granger@hogwarts.edu",
        isDarkModeEnabled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ron",
        email: "ronald.weasley@hogwarts.edu",
        isDarkModeEnabled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  },
};
