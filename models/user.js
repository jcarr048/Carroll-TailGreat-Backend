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
      tailgate_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user'
    }
  )
  return User
}
