const UsuariosController = {};

const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");  


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODOS LOS USUARIOS -------------------------------------------------

UsuariosController.getUsuariosAll = async (req, res) => {
    try {
      let resp = await models.usuarios.findAll({
       
      });
      res.send(resp);
    } catch (err) {
      res.send(err);
    }
  };


//OBTENEMOS USUARIO POR ID ---------------------------------------------------------------

UsuariosController.getUsuariosById = async (req, res) => {
    try {
      const id = req.params.id;
      let resp = await models.usuarios.findAll({
        
          where: { id_usuario: id },
        })
        .then((resp) => {
          res.send(resp);
        });
    } catch (err) {
      res.send(err);
    }
  };


  //OBTENEMOS USUARIO POR ID ---------------------------------------------------------------

  UsuariosController.registerUser = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.usuarios.create({
            nombre: data.nombre,
            apellidos: data.apellidos,
            edad: data.edad,
            email: data.email,
            contrasena: data.contrasena,
            direccion: data.direccion,
            pais: data.pais,
            telefono: data.telefono,
            roleIdRol: data.roleIdRole
        })

        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

module.exports = UsuariosController;
