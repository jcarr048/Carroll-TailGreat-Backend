'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('hosts', [
      {
        hostName: 'g13boys',
        email: 'g13@email.com',
        passwordDigest: 'password',
        firstName: 'Tom',
        lastName: 'Peterson',
        age: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hosts')
  }
}
