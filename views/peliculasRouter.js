const express = require('express');
const router = express.Router()

const PeliculasController = require("../controllers/peliculasController");

//Endpoint para ver todas las peliculas
router.get("/peliculas",PeliculasController.getAll);

//Endpoint para buscar películas por id 
router.get("/id/:id",PeliculasController.getById);

//Endpoint para buscar pelicula por titulo
router.get("/titulo/:titulo", PeliculasController.getByTitulo);

//Endpoint para buscar pelicula por titulo
router.get("/genero/:genero", PeliculasController.getByGenero);

