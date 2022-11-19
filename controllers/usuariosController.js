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


  //CREAMOS UN NUEVO USUARIO ---------------------------------------------------------------

  UsuariosController.registroUsuario = async (req, res) => {
    try {
        let usuario = req.body
        let resp = await models.usuarios.create({
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            edad: usuario.edad,
            email: usuario.email,
            contrasena: usuario.contrasena,
            direccion: usuario.direccion,
            pais: usuario.pais,
            telefono: usuario.telefono,
            roleIdRol: usuario.roleIdRol
        })

        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}



//ACTUALIZAMOS LOS DATOS DE UN USUARIO  -------------------------------------------

UsuariosController.actualizaUsuario = async (req, res) => {
  try {
      let usuario = req.body
      let resp = await models.usuarios.update(
          {
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            email: usuario.email,
            contrasena: usuario.contrasena,
                        
          },
          {
              where: { email: usuario.email }
          }
      )

      res.send(resp)

  } catch (err) {
      res.send(err)
  }
}


//ELIMINAMOS UN USUARIO  ----------------------------------------------------------





module.exports = UsuariosController;
