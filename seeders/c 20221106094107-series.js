'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('series', [

      {
        titulo: "Aquí no hay quien viva",
        proximo: false,
        valoracion: 5,
        articuloIdArticulos: 20,

      },
      {
        titulo: "7 vidas",
        proximo: false,
        valoracion: 4,
        articuloIdArticulos: 21,

      },
      {
        titulo: "Juego de tronos: la casa del dragón",
        proximo: true,
        valoracion: 5,
        articuloIdArticulos: 22,

      },
      {
        titulo: "El cuento de la criada",
        proximo: true,
        valoracion: 3,
        articuloIdArticulos: 23,

      },
      {
        titulo: "Rick and Morty",
        proximo: true,
        valoracion: 4,
        articuloIdArticulos: 24,

      },
      {
        titulo: "Otras galaxias",
        proximo: true,
        valoracion: 5,
        articuloIdArticulos: 25,

      },
      {
        titulo: "Gargolas",
        proximo: false,
        valoracion: 5,
        articuloIdArticulos: 26,

      },
      {
        titulo: "Marianne",
        proximo: false,
        valoracion: 3,
        articuloIdArticulos: 27,

      },
      {
        titulo: "American Horror Story",
        proximo: true,
        valoracion: 4,
        articuloIdArticulos: 28,

      },
      {
        titulo: "Dinosaurios",
        proximo: false,
        valoracion: 4,
        articuloIdArticulos: 29,

      },
      {
        titulo: "Malcom in the middle",
        proximo: false,
        valoracion: 5,
        articuloIdArticulos: 30,

      },
      {
        titulo: "El señor de los anillos",
        proximo: true,
        valoracion: 4,
        articuloIdArticulos: 31,

      },
      {
        titulo: "West World",
        proximo: true,
        valoracion: 5,
        articuloIdArticulos: 32,

      },
      {
        titulo: "Los Simpsons",
        proximo: true,
        valoracion: 5,
        articuloIdArticulos: 33,

      },
      {
        titulo: "Futurama",
        proximo: false,
        valoracion: 5,
        articuloIdArticulos: 34,

      },
      {
        titulo: "Padre de Familia",
        proximo: true,
        valoracion: 3,
        articuloIdArticulos: 35,

      },
      {
        titulo: "Friends",
        proximo: false,
        valoracion: 5,
        articuloIdArticulos: 36,

      },
      {
        titulo: "La banda del patio",
        proximo: false,
        valoracion: 3,
        articuloIdArticulos: 37,

      },
      {
        titulo: "X-men",
        proximo: false,
        valoracion: 2,
        articuloIdArticulos: 38,

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
