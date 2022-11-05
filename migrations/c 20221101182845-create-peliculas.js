'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peliculas', {
      id_pelicula: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      valoracion: {
        type: Sequelize.INTEGER
      },
      cine: {
        type: Sequelize.BOOLEAN
      },
    
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('peliculas');
  }
};