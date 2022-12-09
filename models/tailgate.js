'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tailgate extends Model {
    static associate(models) {
      Tailgate.hasMany(models.User, {
        as: 'attendee',
        foreignKey: 'tailgate_id'
      })
      Tailgate.hasMany(models.Feedback, {
        as: 'tailgate_feedback',
        foreignKey: 'tailgate_id'
      })
      Tailgate.belongsTo(models.Host, {
        as: 'tailgate_host',
        foreignKey: 'host_id'
      })
    }
  }
  Tailgate.init(
    {
      image: DataTypes.TEXT,
      tailgateName: DataTypes.STRING,
      lot: DataTypes.STRING,
      age: DataTypes.STRING,
      alcohol: DataTypes.STRING,
      description: DataTypes.TEXT,
      food: DataTypes.STRING,
      games: DataTypes.STRING,
      host_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Tailgate',
      tableName: 'Tailgates'
    }
  )
  return Tailgate
}
