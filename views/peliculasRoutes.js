const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const PeliculasController = require("../controllers/peliculasController");


///// C R U D   P E L I C U L A S /////

router.get("/", PeliculasController.todasPeliculas);
router.get("/id/:id", PeliculasController.peliculasPorId);
router.get("/titulo/:titulo", PeliculasController.peliculasPorTitulo);
router.get("/genero/:genero", PeliculasController.peliculasPorGenero);
router.get("/toprated", PeliculasController.peliculasTopRated);
router.get("/cine", PeliculasController.peliculasEnCine);


module.exports = router;