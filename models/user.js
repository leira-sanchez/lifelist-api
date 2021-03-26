"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    isDarkModeEnabled: DataTypes.BOOLEAN,
  });
  user.associate = (models) => {
    user.hasMany(models.list, { foreignKey: "ownerId", sourceKey: "id" });
    user.hasMany(models.task, { foreignKey: "ownerId", sourceKey: "id" });
  };
  return user;
};

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//       user.hasMany(models.list, { foreignKey: "ownerId", sourceKey: "id" });
//       user.hasMany(models.task, { foreignKey: "ownerId", sourceKey: "id" });
//     }
//   }
//   user.init(
//     {
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       isDarkModeEnabled: DataTypes.BOOLEAN,
//     },
//     {
//       sequelize,
//       modelName: user,
//     }
//   );
//   return user;
// };
