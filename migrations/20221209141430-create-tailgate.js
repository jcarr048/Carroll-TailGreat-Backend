'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tailgates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      tailgateName: {
        type: Sequelize.STRING
      },
      lot: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      alcohol: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      food: {
        type: Sequelize.STRING
      },
      games: {
        type: Sequelize.STRING
      },
      host_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'hosts',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tailgates')
  }
}
