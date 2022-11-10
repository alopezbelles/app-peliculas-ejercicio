const config = require('../config/config.json')
const Sequelize = require('sequelize')
// const { Sequelize } = require('sequelize')


require ('dotenv').config()

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
      host: config.development.host,
      port: config.development.port,
      dialect: config.development.dialect
  }
)

// module.exports = sequelize

// module.exports = sequelize.authenticate()
// .then((db)=>{
//     console.log('MYSQL connected'); 
//     return db;
// });

module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
});