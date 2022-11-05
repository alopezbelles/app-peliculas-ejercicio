'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      nombre: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id_rol'
        },
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};