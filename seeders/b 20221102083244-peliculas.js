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
        articuloIdArticulos: 1,

      },


      {
        titulo: "La milla verde",
        genero: "Drama",
        director: "Frank Darabont",
        valoracion: 5,
        cine: false,
        articuloIdArticulos: 2,

      },

      {
        titulo: "Los goonies",
        genero: "Infantil",
        director: "Richard Donner",
        valoracion: 4,
        cine: false,
        articuloIdArticulos: 3,

      },
      
      {
        titulo: "Hercules",
        genero: "Infantil",
        director: "Ron Clements",
        valoracion: 3,
        cine: false,
        articuloIdArticulos: 4,

      },
      {
        titulo: "El cuarto pasajero",
        genero: "Terror",
        director: "Alex de la Iglesia",
        valoracion: 4,
        cine: true,
        articuloIdArticulos: 5,

      },
      {
        titulo: "No mires a los ojos",
        genero: "Drama",
        director: "Félix Viscarret",
        valoracion: 4,
        cine: true,
        articuloIdArticulos: 6,

      },
      {
        titulo: "Smile",
        genero: "Terror",
        director: "Parker Finn",
        valoracion: 2,
        cine: true,
        articuloIdArticulos: 7,

      },
      {
        titulo: "Carrie",
        genero: "Terror",
        director: "Kimberly Peirice",
        valoracion: 4,
        cine: false,
        articuloIdArticulos: 8,

      },
      {
        titulo: "Agora",
        genero: "Historia",
        director: "Alejandro Amenábar",
        valoracion: 5,
        cine: false,
        articuloIdArticulos: 9,

      },
      {
        titulo: "El Perfume",
        genero: "Drama",
        director: "Tom Tykwer",
        valoracion: 5,
        cine: false,
        articuloIdArticulos: 10,

      },
      {
        titulo: "Amsterdam",
        genero: "Drama",
        director: "David O.Russell",
        valoracion: 2,
        cine: true,
        articuloIdArticulos: 11,

      },
      {
        titulo: "Modelo 77",
        genero: "Accion",
        director: "Alberto Rodriguez Libero",
        valoracion: 3,
        cine: true,
        articuloIdArticulos: 12,

      },
      {
        titulo: "Los Otros",
        genero: "Terror",
        director: "Alejandro Amenábar",
        valoracion: 5,
        cine: false,
        articuloIdArticulos: 13,

      },
      {
        titulo: "Piratas del Caribe: la maldición de la perla negra",
        genero: "Aventuras",
        director: "Gore Virbinsky",
        valoracion: 3,
        cine: false,
        articuloIdArticulos: 14,

      },
      {
        titulo: "El señor de los anillos: la comunidad del anillo",
        genero: "Ciencia ficción",
        director: "Peter Jackson",
        valoracion: 5,
        cine: false,
        articuloIdArticulos: 15,

      },
      {
        titulo: "Harry potter y la piedra filosofal",
        genero: "Ciencia ficción",
        director: "Chris Colombus",
        valoracion: 4,
        cine: false,
        articuloIdArticulos: 16,

      },
      {
        titulo: "Sleepy Hollow",
        genero: "Terror",
        director: "Tim Burton",
        valoracion: 5,
        cine: false,
        articuloIdArticulos: 17,

      },
      {
        titulo: "Black Adam",
        genero: "Acción",
        director: "Jaume Collet",
        valoracion: 1,
        cine: true,
        articuloIdArticulos: 18,

      },
      {
        titulo: "13 Exorcismos",
        genero: "Terror",
        director: "Jacobo Martinez",
        valoracion: 2,
        cine: true,
        articuloIdArticulos: 19,

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
