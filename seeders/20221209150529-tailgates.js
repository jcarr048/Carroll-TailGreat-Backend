'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tailgates', [
      {
        image: 'img',
        tailgateName: '2 guys and a cooler',
        lot: 'G24',
        age: '21+',
        alcohol: 'beers and vodka',
        description: 'we will get you drunk',
        food: 'burgers and dogs',
        games: 'cornhole',
        host_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tailgates')
  }
}
