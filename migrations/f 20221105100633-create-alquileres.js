'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alquileres', {
      id_alquileres: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      fechaalquiler: {
        type: Sequelize.DATE
      },
      fechadevolucion: {
        type: Sequelize.DATE
      },
      
      id_articulos: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articulos',
          key: 'id_articulos'
        },
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id_usuario'
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alquileres');
  }
};