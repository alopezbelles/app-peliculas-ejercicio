const { usuarios } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const AuthController = {}; 

//-------------------------------------------------------------------------------------
//LOGIN USUARIO EN BASE DE DATOS
//get usuarios
AuthController.signIn = (req, res) =>{
        let { email, contrasena } = req.body;
        // Buscar usuario
        usuarios.findOne({ where: { email: email }
        }).then(usuarios => {
            if (!usuarios) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(contrasena, usuarios.contrasena)) {
                    // Creamos el token
                    let token = jwt.sign({ usuarios: usuarios }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        usuarios: usuarios,
                        token: token
                    })
                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };


//-------------------------------------------------------------------------------------
//REGISTRAR USUARIO EN BASE DE DATOS
//create usuarios
AuthController.signUp = (req, res)=> {

        // Encriptamos la contraseña
        let contrasena = bcrypt.hashSync(req.body.contrasena, Number.parseInt(authConfig.rounds));

        // Crear un usuario
        usuarios.create({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            edad: req.body.edad,            
            email: req.body.email,
            contrasena: req.body.contrasena,
            direccion: req.body.direccion,
            pais: req.body.pais,
            telefono: req.body.telefono,
            roleIdRol: req.body.roleIdRol
        }).then(usuarios => {

            // Creamos el token
            let token = jwt.sign({ usuarios: usuarios }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                usuarios: usuarios,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

        // // Asigna rol a usuario
        // user_role.create({
        //     user_id: res.usuarios.id,
        //     role_id: 1
        // }).then().catch(err => {
        //     res.status(500).json(err);
        // });

    };

module.exports = AuthController;
