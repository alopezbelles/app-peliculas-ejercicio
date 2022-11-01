const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Pelicula extends Model {}
  
  
  Pelicula.init({
    id_pelicula: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    director: DataTypes.STRING,
    valoracion: DataTypes.INTEGER,
    cine: DataTypes.BOOLEAN,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: "peliculas",
    //FreezeTableName nos conserva el nombre en vez de ponerlo en plural
    freezeTableName: true,
    //Evita que sequelize nos genere los campos createdAt y modifiedAt en la tabla
    timestamps: false
  });
  


  module.exports = Pelicula