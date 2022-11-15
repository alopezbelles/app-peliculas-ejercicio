'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('alquileres', [
        
        {
          fechaalquiler: 2022-05-12,
          fechadevolucion: 2022-06-12,
          usuario: "alex@alex.com",
          id_articulos: 4,
          id_usuario: 1,
          
        },
        {
          fechaalquiler: 2022-02-01,
          fechadevolucion: 2022-03-01,
          usuario: "diego@diego.com",
          id_articulos: 8,
          id_usuario: 2,
          
        },
        {
          fechaalquiler: 2022-03-18,
          fechadevolucion: 2022-04-18,
          usuario: "sheila@sheila.com",
          id_articulos: 20,
          id_usuario: 3,
          
        },


      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
