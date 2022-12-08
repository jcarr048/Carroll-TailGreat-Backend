'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate(models) {
      Feedback.belongsTo(models.User, {
        as: 'reviewer',
        foreignKey: 'reviewer_id'
      })
      Feedback.belongsTo(models.Tailgates, {
        as: 'critique',
        foreignKey: 'critique_id'
      })
    }
  }
  Feedback.init({
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tailGateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tailgate_id',
      onDelete: 'CASCADE',
      references: {
        model: 'tailgates',
        key: 'id'
      }
    },
    sequelize,
    modelName: 'Feedback',
    tableName: 'feedbacks'
  })
}
