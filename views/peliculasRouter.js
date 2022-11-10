const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const PeliculasController = require("../controllers/peliculasController");


///// C R U D   P E L I C U L A S /////

//Endpoint para ver todas las peliculas
router.get("/",PeliculasController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id",PeliculasController.getById);

//Endpoint para buscar pelicula por titulo
router.get("/titulo/:titulo", PeliculasController.getByTitulo);

//Endpoint para buscar pelicula por genero
router.get("/genero/:genero", PeliculasController.getByGenero);

//Endpoint para buscar pelicula por disponibilidad en cines
router.get("/cines/:cines", PeliculasController.getByGenero);

module.exports = router;