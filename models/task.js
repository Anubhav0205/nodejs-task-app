'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // ✅ Each Task belongs to one User
      Task.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'user'
      });
    }
  }

  Task.init({
    taskName: DataTypes.STRING,
    taskDescription: DataTypes.STRING,
    taskType: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};