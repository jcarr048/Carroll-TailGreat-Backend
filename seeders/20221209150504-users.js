'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        username: 'john123',
        email: 'john@email.com',
        passwordDigest: '1234',
        firstName: 'John',
        lastName: 'Thomas',
        age: 24,
        tailgate_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
}
