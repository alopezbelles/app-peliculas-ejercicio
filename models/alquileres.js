'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alquileres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      alquileres.belongsToMany(models.articulos, { through: 'alquileresarticulos'})
      alquileres.belongsTo(models.usuarios, { foreignKey: 'id_usuario' })

    }
  }
  alquileres.init({
    id_alquileres: DataTypes.INTEGER,
    fechaalquiler: DataTypes.DATE,
    fechadevolucion: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'alquileres',
  });
  return alquileres;
};