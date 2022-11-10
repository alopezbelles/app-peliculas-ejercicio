'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('roles', [


      {
        id_rol: "1",
        usuario: "usuario",      
      },
      {
        id_rol: "2",
        usuario: "administrador",      
      },
      {
        id_rol: "3",
        usuario: "super-administrador",      
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
