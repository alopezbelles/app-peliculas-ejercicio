const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { usuarios } = require('../models/index'); //incluyo usuarios model

module.exports = (req, res, next) => {

    //console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                
                usuarios.findByPk(decoded.usuarios.id, { include: "roles" }).then(usuarios => {
                    //console.log(usuarios.roles);
                    req.usuarios = usuarios;
                    next();
                });
            }

        })
    }

};