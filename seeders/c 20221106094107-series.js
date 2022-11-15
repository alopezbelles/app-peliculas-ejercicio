'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('series', [

      {
        titulo: "Aquí no hay quien viva",
        proximo: false,
        valoracion: 5,
        id_articulos: 20,

      },
      {
        titulo: "7 vidas",
        proximo: false,
        valoracion: 4,
        id_articulos: 21,

      },
      {
        titulo: "Juego de tronos: la casa del dragón",
        proximo: true,
        valoracion: 5,
        id_articulos: 22,

      },
      {
        titulo: "El cuento de la criada",
        proximo: true,
        valoracion: 3,
        id_articulos: 23,

      },
      {
        titulo: "Rick and Morty",
        proximo: true,
        valoracion: 4,
        id_articulos: 24,

      },
      {
        titulo: "Otras galaxias",
        proximo: true,
        valoracion: 5,
        id_articulos: 25,

      },
      {
        titulo: "Gargolas",
        proximo: false,
        valoracion: 5,
        id_articulos: 26,

      },
      {
        titulo: "Marianne",
        proximo: false,
        valoracion: 3,
        id_articulos: 27,

      },
      {
        titulo: "American Horror Story",
        proximo: true,
        valoracion: 4,
        id_articulos: 28,

      },
      {
        titulo: "Dinosaurios",
        proximo: false,
        valoracion: 4,
        id_articulos: 29,

      },
      {
        titulo: "Malcom in the middle",
        proximo: false,
        valoracion: 5,
        id_articulos: 30,

      },
      {
        titulo: "El señor de los anillos",
        proximo: true,
        valoracion: 4,
        id_articulos: 31,

      },
      {
        titulo: "West World",
        proximo: true,
        valoracion: 5,
        id_articulos: 32,

      },
      {
        titulo: "Los Simpsons",
        proximo: true,
        valoracion: 5,
        id_articulos: 33,

      },
      {
        titulo: "Futurama",
        proximo: false,
        valoracion: 5,
        id_articulos: 34,

      },
      {
        titulo: "Padre de Familia",
        proximo: true,
        valoracion: 3,
        id_articulos: 35,

      },
      {
        titulo: "Friends",
        proximo: false,
        valoracion: 5,
        id_articulos: 36,

      },
      {
        titulo: "La banda del patio",
        proximo: false,
        valoracion: 3,
        id_articulos: 37,

      },
      {
        titulo: "X-men",
        proximo: false,
        valoracion: 2,
        id_articulos: 38,

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
