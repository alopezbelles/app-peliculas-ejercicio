const models = require('../models/index');

const usuariosController = {}

usuariosController.getUsuarios = (req,res) => {
    models.usuarios.findAll()
    .then((resp)=> {
        res.send(resp)

    })
};

module.exports = usuariosController