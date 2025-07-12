'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING // will store filename
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female', 'Others'),
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('Super-admin', 'Admin', 'Manager'),
      allowNull: false
    },
    createdBy: {
      type: DataTypes.STRING // Role of creator
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};