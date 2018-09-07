'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: { type: DataTypes.STRING, allowNull: false },
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
    // Burger.belongsTo(models.Customer, {
    //   foreignKey: {
    //     allowNull: true
    //   }
    // });
  };
  return Burger;
};
