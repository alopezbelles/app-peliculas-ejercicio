const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Serie extends Model {}
  
  
  Serie.init({
    id_serie: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nombre: DataTypes.STRING,
    genero: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    director: DataTypes.STRING,
    actores: DataTypes.TEXT,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: "series",
    //FreezeTableName nos conserva el nombre en vez de ponerlo en plural
    freezeTableName: true,
    //Evita que sequelize nos genere los campos createdAt y modifiedAt en la tabla
    timestamps: false
  });
  


  module.exports = Serie