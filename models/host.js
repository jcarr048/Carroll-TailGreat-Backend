'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Host extends Model {
    static associate(models) {
      Host.hasOne(models.Tailgate, {
        as: 'owner',
        foreignKey: 'host_id'
      })
    }
  }
  Host.init(
    {
      hostName: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Host',
      tableName: 'hosts'
    }
  )
  return Host
}
