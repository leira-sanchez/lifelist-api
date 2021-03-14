"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define("task", {
    title: DataTypes.STRING,
    completedAt: DataTypes.DATE,
    listId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
  });
  task.associate = (models) => {
    task.belongsTo(models.list, { foreignKey: "listId", sourceKey: "id" });
    task.belongsTo(models.user, { foreignKey: "ownerId", sourceKey: "id" });
  };
};
