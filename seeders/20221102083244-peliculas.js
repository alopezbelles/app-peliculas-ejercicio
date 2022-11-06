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
        titulo: "Smile",
        genero: "Terror",
        director: "Parker Finn",
        valoracion: 2,
        cine: true,

      },
      {
        titulo: "Carrie",
        genero: "Terror",
        director: "Kimberly Peirice",
        valoracion: 4,
        cine: false,

      },
      {
        titulo: "Agora",
        genero: "Historia",
        director: "Alejandro Amenábar",
        valoracion: 5,
        cine: false,

      },
      {
        titulo: "El Perfume",
        genero: "Drama",
        director: "Tom Tykwer",
        valoracion: 5,
        cine: false,

      },
      {
        titulo: "Amsterdam",
        genero: "Drama",
        director: "David O.Russell",
        valoracion: 2,
        cine: true,

      },
      {
        titulo: "Modelo 77",
        genero: "Accion",
        director: "Alberto Rodriguez Libero",
        valoracion: 3,
        cine: true,

      },
      {
        titulo: "Los Otros",
        genero: "Terror",
        director: "Alejandro Amenábar",
        valoracion: 5,
        cine: false,

      },
      {
        titulo: "Piratas del Caribe: la maldición de la perla negra",
        genero: "Aventuras",
        director: "Gore Virbinsky",
        valoracion: 3,
        cine: false,

      },
      {
        titulo: "El señor de los anillos: la comunidad del anillo",
        genero: "Ciencia ficción",
        director: "Peter Jackson",
        valoracion: 5,
        cine: false,

      },
      {
        titulo: "Harry potter y la piedra filosofal",
        genero: "Ciencia ficción",
        director: "Chris Colombus",
        valoracion: 4,
        cine: false,

      },
      {
        titulo: "Sleepy Hollow",
        genero: "Terror",
        director: "Tim Burton",
        valoracion: 5,
        cine: false,

      },
      {
        titulo: "Black Adam",
        genero: "Acción",
        director: "Jaume Collet",
        valoracion: 1,
        cine: true,

      },
      {
        titulo: "13 Exorcismos",
        genero: "Terror",
        director: "Jacobo Martinez",
        valoracion: 2,
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
