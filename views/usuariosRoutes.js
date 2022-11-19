const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const UsuariosController = require("../controllers/usuariosController");


///// C R U D   U S U A R I O S /////

router.get("/", UsuariosController.getUsuariosAll);
router.get("/id/:id", UsuariosController.getUsuariosById);
router.post("/registroUsuario", UsuariosController.registroUsuario);
router.put("/actualizaUsuario", UsuariosController.actualizaUsuario);




module.exports = router;