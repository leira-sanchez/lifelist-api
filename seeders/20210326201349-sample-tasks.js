"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Tasks", [
      {
        title: "walk the dog",
        completedAt: new Date(),
        listId: 1,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "read a book",
        listId: 1,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "lavar la Jeepta",
        listId: 1,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  },
};
