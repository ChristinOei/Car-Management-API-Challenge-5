"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        username: Elo,
        password: $2b$10$POtRqi.tSUum60x6HFYcdeI4k1rYDAYaXarMnXjfnPjmLTrFxVNqq,
        role: superadmin,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  //async down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

// ===== seeders-nya ngakk bisa di npx sequelize-cli db:seed:all
// ERROR: connect ECONNREFUSED 127.0.0.1:3306 ?
