'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('alquileres', [
        
        {
          fechaalquiler: "2022-05-12",
          fechadevolucion: "2022-06-12",
          articuloIdArticulos: 4,
          usuarioIdUsuario: 1,
          
        },
        {
          fechaalquiler: "2022-02-01",
          fechadevolucion: "2022-03-01",
          articuloIdArticulos: 8,
          usuarioIdUsuario: 2,
          
        },
        {
          fechaalquiler: "2022-03-18",
          fechadevolucion: "2022-04-18",
          articuloIdArticulos: 20,
          usuarioIdUsuario: 3,
          
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
