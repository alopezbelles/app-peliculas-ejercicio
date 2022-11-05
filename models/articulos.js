'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articulos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      articulos.hasMany(models.series)
      articulos.hasMany(models.peliculas)

      articulos.belongsToMany(models.alquileres, {through: 'alquileresarticulos'})

    }
  }
  articulos.init({
    id_articulos: DataTypes.INTEGER
  }, 
  
  
  {
    sequelize,
    modelName: 'articulos',
  });
  return articulos;
};