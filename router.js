const express = require('express')
const router = express.Router()

const usuariosRoutes = require('./views/usuariosRoutes')


//middleware para las rutas de usuario
router.use('/usuarios', usuariosRoutes)


module.exports = router