const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const SeriesController = require("../controllers/seriesController");


///// C R U D   S E R I E S /////

router.get("/", SeriesController.todasSeries);
router.get("/id/:id", SeriesController.seriesPorId);
router.get("/titulo/:titulo", SeriesController.seriesPorTitulo);
router.get("/toprated", SeriesController.seriesTopRated);
router.get("/proximoepisodio", SeriesController.seriesProximoEpisodio);


module.exports = router;