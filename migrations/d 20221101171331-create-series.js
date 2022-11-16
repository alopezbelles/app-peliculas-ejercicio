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
      titulo: {
        type: Sequelize.STRING
      },
      proximo: {
        type: Sequelize.BOOLEAN

      },
      valoracion: {
        type: Sequelize.DECIMAL
      },
      
      articuloIdArticulos: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articulos',
          key: 'id_articulos'
        }
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('series');
  }
};