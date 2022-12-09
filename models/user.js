'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Feedback, {
        as: 'user_feedback',
        foreignKey: 'user_id'
      })
      User.belongsTo(models.Tailgate, {
        as: 'attendee',
        foreignKey: 'tailgate_id'
      })
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      tailgate_id: {
        tyoe: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        referenes: {
          model: 'tailgates',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
