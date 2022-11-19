const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const AlquileresController = require("../controllers/alquileresController");


///// C R U D   A L Q U I L E R E S /////

router.get("/", AlquileresController.todosAlquileres);



module.exports = router;