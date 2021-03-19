"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  user.associate = (models) => {
    user.hasMany(models.list, { foreignKey: "ownerId", sourceKey: "id" });
    user.hasMany(models.task, { foreignKey: "ownerId", sourceKey: "id" });
  };
};

// TODO:
// check associations are right
// create seeds for tasks
// migrate
// seeds
