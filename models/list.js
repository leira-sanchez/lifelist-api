"use strict";
module.exports = (sequelize, DataTypes) => {
  const list = sequelize.define("list", {
    title: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
  });
  list.associate = (models) => {
    list.belongsTo(models.user, { foreignKey: "ownerId", sourceKey: "id" });
    list.hasMany(models.task, { foreignKey: "listId", sourceKey: "id" });
  };
};
