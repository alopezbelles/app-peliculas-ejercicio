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
      alquileres.belongsTo(models.usuarios, {foreignKey: 'id_usuario'})

      // alquileres.belongsToMany(models.articulos, {through: 'alquileresarticulos'}) //poner la tabla intermedia en migraciones

      

    }
  }
  alquileres.init({
    id_alquileres: DataTypes.INTEGER,
    fechaalquiler: DataTypes.DATE,
    fechadevolucion: DataTypes.DATE,

    id_articulos: {
      type: DataTypes.INTEGER,
      references: {
        model: 'articulos',
        key: 'id_articulos'
      },
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      },
    }
  }, 
  
  
  {
    sequelize,
    modelName: 'alquileres',
  });
  return alquileres;
};