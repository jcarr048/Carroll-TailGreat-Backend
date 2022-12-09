'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('feedbacks', [
      {
        user_id: 5,
        rating: 3,
        body: 'sucked',
        tailgate_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('feedbacks')
  }
}
