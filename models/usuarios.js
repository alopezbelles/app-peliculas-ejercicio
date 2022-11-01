const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Usuario extends Model { }

Usuario.init({
  id_usuario: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  nombre: DataTypes.STRING,
  apellidos: DataTypes.STRING,
  edad: DataTypes.INTEGER,
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    require: true,
    unique: true,
    validate: {
      isEmail: true,
      len: [1, 100]
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

  sequelize,
  modelName: "usuarios",
  //FreezeTableName nos conserva el nombre en vez de ponerlo en plural
  freezeTableName: true,
  //Evita que sequelize nos genere los campos createdAt y modifiedAt en la tabla
  timestamps: false
})

module.exports = Usuario