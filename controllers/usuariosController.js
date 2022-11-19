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
        let usuarioDate = req.body
        let resp = await models.usuarios.create({
            nombre: usuarioDate.nombre,
            apellidos: usuarioDate.apellidos,
            edad: usuarioDate.edad,
            email: usuarioDate.email,
            contrasena: usuarioDate.contrasena,
            direccion: usuarioDate.direccion,
            pais: usuarioDate.pais,
            telefono: usuarioDate.telefono,
            roleIdRol: usuarioDate.roleIdRol
        })

        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}



//ACTUALIZAMOS LOS DATOS DE UN USUARIO  -------------------------------------------

UsuariosController.actualizaUsuario = async (req, res) => {
  try {
      let usuarioDate = req.body
      let resp = await User.update(
          {
            nombre: usuarioDate.nombre,
            apellidos: usuarioDate.apellidos,
            email: usuarioDate.email,
            contrasena: usuarioDate.contrasena,
            direccion: usuarioDate.direccion,
            pais: usuarioDate.pais,
            telefono: usuarioDate.telefono,
            
          },
          {
              where: { mail: usuarioDate.mail }
          }
      )

      res.send(resp)

  } catch (err) {
      res.send(err)
  }
}





//ELIMINAMOS UN USUARIO  ----------------------------------------------------------





module.exports = UsuariosController;
