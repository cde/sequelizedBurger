'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    fullName: { type: DataTypes.STRING, allowNull: false },
    email: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    // Customer.hasOne(models.Burger, {
    //   onDelete: "cascade"
    // })
  };
  return Customer;
};
