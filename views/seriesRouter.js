const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const SeriesController = require("../controllers/seriesController");


///// C R U D   S E R I E S /////

router.get("/series",SeriesController.getSeriesAll);
router.get("/id/:id",SeriesController.getSeriesById);
router.get("/titulo/:titulo", SeriesController.getSeriesByTitulo);
router.get("/toprated", SeriesController.getSeriesTopRated);


module.exports = router;