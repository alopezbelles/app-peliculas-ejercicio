const dotenv = require('dotenv').config();

module.exports = {
    secret: process.env.AUTH_SECRET || "abretesesamo",
    expires: process.env.AUTH_EXPIRES || "1d",
    rounds: process.env.AUTH_ROUNDS || "10",
}