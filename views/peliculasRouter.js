const express = require('express');
const router = express.Router();

const peliculas = require ('../models/peliculas')

// const db = require('../db/db')

//Importamos modelo de datos
const PeliculasController = require("../controllers/peliculasController");


///// C R U D   P E L I C U L A S /////

router.get("/",PeliculasController.getPeliculasAll);
// router.get("/id/:id",PeliculasController.getPeliculasById);
// router.get("/titulo/:titulo", PeliculasController.getPeliculasByTitulo);
// router.get("/genero/:genero", PeliculasController.getPeliculasByGenero);
// router.get("/toprated", PeliculasController.getPeliculasTopRated);


module.exports = router;