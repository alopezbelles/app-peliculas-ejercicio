"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class alquileres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      alquileres.belongsTo(models.usuarios);
      alquileres.belongsTo(models.articulos);

      
    }
  }
  alquileres.init(
    {
      id_alquileres: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      fechaalquiler: DataTypes.DATE,
      fechadevolucion: DataTypes.DATE,

      articuloIdArticulos: {
        type: DataTypes.INTEGER,
        references: {
          model: "articulos",
          key: "id_articulos",
        },
      },
      usuarioIdUsuario: {
        type: DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id_usuario",
        },
      },
    },

    {
      sequelize,
      modelName: "alquileres",
      timestamps: false,
    }
  );
  return alquileres;
};
