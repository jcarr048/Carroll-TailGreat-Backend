'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      modelName: 'User'
    }
  )
  return User
}
