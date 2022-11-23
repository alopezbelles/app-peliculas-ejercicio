const express = require('express');
const router = express.Router();

//Importamos modelo de datos
const UsuariosController = require("../controllers/usuariosController");
const AuthController = require("../controllers/authController")
const {middlewareBearer} = require('../middlewaresAuth/middlewaresAuth')


///// C R U D   U S U A R I O S /////

router.get("/", UsuariosController.todosUsuarios);
router.get("/id/:id", UsuariosController.usuarioPorId);
// router.post("/registroUsuario", UsuariosController.registroUsuario);
router.post("/registroUsuario", AuthController.signUp);
router.post("/loginUsuario", AuthController.signIn);
router.put("/actualizaUsuario/:email", middlewareBearer, UsuariosController.actualizaUsuario);
router.delete("/eliminaUsuario/:id", middlewareBearer, UsuariosController.eliminaUsuario);




module.exports = router;