"use strict";
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define("tag", {
    title: DataTypes.STRING,
  });
  tag.associate = (models) => {
    tag.belongsToMany(models.task, {
      through: "taskTag",
      as: "tasks",
      foreignKey: "tagId",
    });
  };
  return tag;
};
