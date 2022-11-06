'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('People', [

      {
        titulo: "Aquí no hay quien viva",
        proximo: false,
        valoracion: 5,

      },
      {
        titulo: "7 vidas",
        proximo: false,
        valoracion: 4,

      },
      {
        titulo: "Juego de tronos: la casa del dragón",
        proximo: true,
        valoracion: 5,

      },
      {
        titulo: "El cuento de la criada",
        proximo: true,
        valoracion: 3,

      },
      {
        titulo: "Rick and Morty",
        proximo: true,
        valoracion: 4,

      },
      {
        titulo: "Otras galaxias",
        proximo: true,
        valoracion: 5,

      },
      {
        titulo: "Gargolas",
        proximo: false,
        valoracion: 5,

      },
      {
        titulo: "Marianne",
        proximo: false,
        valoracion: 3,

      },
      {
        titulo: "American Horror Story",
        proximo: true,
        valoracion: 4,

      },
      {
        titulo: "Dinosaurios",
        proximo: false,
        valoracion: 4,

      },
      {
        titulo: "Malcom in the middle",
        proximo: false,
        valoracion: 5,

      },
      {
        titulo: "Dinosaurios",
        proximo: false,
        valoracion: 4,

      },
      {
        titulo: "Malcom in the middle",
        proximo: false,
        valoracion: 5,

      },
      {
        titulo: "Los Simpsons",
        proximo: true,
        valoracion: 5,

      },
      {
        titulo: "Futurama",
        proximo: false,
        valoracion: 5,

      },
      {
        titulo: "Padre de Familia",
        proximo: true,
        valoracion: 5,

      },
      {
        titulo: "Friends",
        proximo: false,
        valoracion: 5,

      },
      {
        titulo: "La banda del patio",
        proximo: false,
        valoracion: 3,

      },
      {
        titulo: "X-men",
        proximo: false,
        valoracion: 2,

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
