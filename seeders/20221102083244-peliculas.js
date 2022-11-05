'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('peliculas', [

      {
        titulo: "El quinto elemento",
        genero: "Ciencia ficción",
        director: " Luc Besson",
        valoracion: 5,
        cine: false,

      },


      {
        titulo: "La milla verde",
        genero: "Drama",
        director: "Frank Darabont",
        valoracion: 5,
        cine: false,

      },

      {
        titulo: "Los goonies",
        genero: "Infantil",
        director: "Richard Donner",
        valoracion: 4,
        cine: false,

      },
      
      {
        titulo: "Hercules",
        genero: "Infantil",
        director: "Ron Clements",
        valoracion: 3,
        cine: false,

      },
      {
        titulo: "El cuarto pasajero",
        genero: "Terror",
        director: "Alex de la Iglesia",
        valoracion: 4,
        cine: true,

      },
      {
        titulo: "No mires a los ojos",
        genero: "Drama",
        director: "Félix Viscarret",
        valoracion: 4,
        cine: true,

      },
      {
        titulo: "No mires a los ojos",
        genero: "Drama",
        director: "Félix Viscarret",
        valoracion: 4,
        cine: true,

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
