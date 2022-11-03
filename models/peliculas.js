'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peliculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  peliculas.init({
    id_pelicula: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    director: DataTypes.STRING,
    valoracion: DataTypes.INTEGER,
    cine: DataTypes.BOOLEAN,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'peliculas',
  });
  return peliculas;
};