// const express = require('express')


const PeliculasRouter = require("./views/peliculasRouter");



//middleware para las rutas de usuario


router.use("peliculas", PeliculasRouter);


module.exports = router