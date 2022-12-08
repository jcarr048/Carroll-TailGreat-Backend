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
      Tailgate.hasOne(models.Host, {
        as: 'tailgate_host',
        foreignKey: 'tailgate_id'
      })
    }
  }
  Tailgate.init(
    {
      host_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'hosts',
          key: 'id'
        }
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      tailgateName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lot: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false
      },
      alcohol: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      foodProvided: {
        type: DataTypes.STRING,
        allowNull: false
      },
      games: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Tailgate',
      tableName: 'tailgates'
    }
  )
  return Tailgate
}
