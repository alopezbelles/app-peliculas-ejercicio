const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const PeliculasController = require("../controllers/peliculasController");


///// C R U D   P E L I C U L A S /////

router.get("/",PeliculasController.getPeliculasAll);
router.get("/id/:id",PeliculasController.getPeliculasById);
router.get("/titulo/:titulo", PeliculasController.getPeliculasByTitulo);
router.get("/genero/:genero", PeliculasController.getPeliculasByGenero);
router.get("/toprated", PeliculasController.getPeliculasTopRated);
router.get("/cine", PeliculasController.getPeliculasEnCine);


module.exports = router;