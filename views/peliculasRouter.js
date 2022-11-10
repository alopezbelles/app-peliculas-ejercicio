const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const PeliculasController = require("../controllers/peliculasController");


///// C R U D   P E L I C U L A S /////

router.get("/peliculas",PeliculasController.getAll);
router.get("/id/:id",PeliculasController.getById);
router.get("/titulo/:titulo", PeliculasController.getByTitulo);
router.get("/genero/:genero", PeliculasController.getByGenero);
router.get("/toprated", PeliculasController.getByGenero);


module.exports = router;