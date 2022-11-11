const express = require('express') //esto es nuevo
const router = express.Router()


//Importamos Routes definidas en views

const PeliculasRouter = require("./views/peliculasRouter");




// End-points CRUD películas
router.use('/peliculas', PeliculasRouter);


module.exports = router