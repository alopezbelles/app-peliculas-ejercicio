const dotenv = require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'DMgG7nClb0xB1N8u5pQq',
  database: process.env.MYSQL_DATABASE || 'api_alquileres',
  host: process.env.MYSQL_HOST || 'containers-us-west-113.railway.app',
  port: process.env.MYSQL_PORT || 5520,
  dialect: process.env.DIALECT || 'mysql'

}
