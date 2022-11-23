const express = require('express');
const router = express.Router();

const {middlewareBearer} = require('../middlewaresAuth/middlewaresAuth')
//Importamos modelo de datos
const AlquileresController = require("../controllers/alquileresController");


///// C R U D   A L Q U I L E R E S /////

router.get("/", middlewareBearer, AlquileresController.todosAlquileres);
router.get("/:id", middlewareBearer, AlquileresController.alquileresPorUsuario);
router.post("/nuevoAlquiler", middlewareBearer, AlquileresController.nuevoAlquiler);
router.put("/actualizaAlquiler/:id", middlewareBearer, AlquileresController.actualizaAlquiler);








module.exports = router;