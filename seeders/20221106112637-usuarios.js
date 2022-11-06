'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('usuarios', [

        
        {
          nombre: "Alejandro",
          apellidos: "López Bellés",
          edad: 32,
          email: "alex@alex.com",
          contrasena: "hola1234",
          direccion: "C/Republica Argentina 71",
          pais: "España",
          telefono: 547896524,
        },

        {
          nombre: "Diego",
          apellidos: "Martinez Perez",
          edad: 42,
          email: "diego@diego.com",
          contrasena: "hola1234",
          direccion: "C/Jorge Juan 45",
          pais: "Francia",
          telefono: 658974153,
        },

        {
          nombre: "Sheila",
          apellidos: "Medina Jimenez ",
          edad: 45,
          email: "sheila@sheila.com",
          contrasena: "contraseña874",
          direccion: "C/Falsa 123",
          pais: "Alemania",
          telefono: 478126982,
        },

        {
          nombre: "Rosa",
          apellidos: "Maria Molas",
          edad: 33,
          email: "rosa@rosa.com",
          contrasena: "perro8742",
          direccion: "C/Republica Argentina 71",
          pais: "España",
          telefono: 863054719,
        },

        {
          nombre: "Hector",
          apellidos: "Medina Jimenez",
          edad: 37,
          email: "hector@hector.com",
          contrasena: "contraseña874",
          direccion: "C/Republica Argentina 71",
          pais: "Italia",
          telefono: 439852471,
        },

        {
          nombre: "Manuel",
          apellidos: "Gutierro Felip",
          edad: 46,
          email: "manuel@manuel.com",
          contrasena: "gallina8971",
          direccion: "C/Camins Catalans",
          pais: "Francia",
          telefono: 239874156,
        },

        {
          nombre: "Liza",
          apellidos: "Belles Rubert",
          edad: 22,
          email: "liza@liza.com",
          contrasena: "5214gato",
          direccion: "C/Barrachina 77",
          pais: "España",
          telefono: 875412369,
        },

        {
          nombre: "Beatriz",
          apellidos: "Jimenez Lopez",
          edad: 36,
          email: "beatriz@beatriz.com",
          contrasena: "59pajaro47",
          direccion: "C/Jacinto Benavente",
          pais: "España",
          telefono: 239874156,
        },

        {
          nombre: "Enrique",
          apellidos: "Felip Galvan",
          edad: 36,
          email: "beatriz@beatriz.com",
          contrasena: "875coche69",
          direccion: "Avda Austria",
          pais: "Austria",
          telefono: 856932001,
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
