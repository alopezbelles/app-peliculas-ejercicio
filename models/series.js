'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      series.belongsTo(models.articulos)

    }
  }
  series.init({
    id_serie: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    titulo: DataTypes.STRING,
    proximo: DataTypes.BOOLEAN,
    valoracion: DataTypes.INTEGER,
    articuloIdArticulos: {
      type: DataTypes.INTEGER,
      references: {
        model: 'articulos',
        key: 'id_articulos'
      },
    }
  }, 
  
  
  {
    sequelize,
    modelName: 'series',
    timestamps: false

  });
  return series;
};