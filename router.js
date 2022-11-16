const express = require('express') //esto es nuevo
const router = express.Router()


//Importamos Routes definidas en views

const PeliculasRouter = require("./views/peliculasRoutes");
const SeriesRouter = require("./views/seriesRoutes")
const UsuariosRouter = require("./views/usuariosRoutes")




// End-points CRUD películasº 
router.use('/peliculas', PeliculasRouter);
router.use('/series', SeriesRouter);
router.use('/usuarios', UsuariosRouter);

module.exports = router