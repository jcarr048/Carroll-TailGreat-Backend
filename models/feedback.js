'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate(models) {
      Feedback.belongsTo(models.User, {
        as: 'user_feedback',
        foreignKey: 'user_id'
      })
      Feedback.belongsTo(models.Tailgate, {
        as: 'tailgate_feedback',
        foreignKey: 'tailgate_id'
      })
    }
  }
  Feedback.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      rating: DataTypes.INTEGER,
      body: DataTypes.TEXT,
      tailgate_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'tailgates',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Feedback',
      tableName: 'feedbacks'
    }
  )
  return Feedback
}
