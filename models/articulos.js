"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class articulos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      articulos.hasMany(models.series);
      articulos.hasMany(models.peliculas);
      articulos.hasMany(models.alquileres);

     
    }
  }
  articulos.init(
    {
      id_articulos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "articulos",
      timestamps: false,
    }
  );
  return articulos;
};
