const express = require('express') //esto es nuevo
const router = express.Router()


//Importamos Routes definidas en views

const PeliculasRouter = require("./views/peliculasRoutes");
const SeriesRouter = require("./views/seriesRoutes")




// End-points CRUD películasº 
router.use('/peliculas', PeliculasRouter);
router.use('/series', SeriesRouter);

module.exports = router