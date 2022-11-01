'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id_serie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.INTEGER
      },
      director: {
        type: Sequelize.STRING
      },
      actores: {
        type: Sequelize.TEXT
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      precio: {
        type: Sequelize.DECIMAL
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('series');
  }
};