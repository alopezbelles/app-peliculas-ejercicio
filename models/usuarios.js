'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios2.init({
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
  
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    email:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      require: true,
      unique: true,
      validate: {
        isEmail: true,
        len: [1, 100]
      },

    },
    contrasena: {
      type: DataTypes.STRING,
      require: true,
      validate: {
        len: [6, 45]
      }
    },
    direccion: DataTypes.STRING,
    pais: DataTypes.STRING,
    telefono: DataTypes.INTEGER,

  }, 
  {
    sequelize,
    modelName: 'usuarios2',
  });
  return usuarios2;
};