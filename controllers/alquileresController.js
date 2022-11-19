const AlquileresController = {};

const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE LOS ALQUILERES  -------------------------------------------------

AlquileresController.todosAlquileres = async (req, res) => {
  try {
    let resp = await models.alquileres.findAll({});
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS ALQUILERES POR USUARIO  -------------------------------------------------

AlquileresController.alquileresPorUsuario = async (req, res) => {
  try {
    let id = req.params.id;
    let resp = await models.alquileres.findAll({
      where: { usuarioIdUsuario: id },
    });

    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//CREAMOS UN NUEVO ALQUILER  -------------------------------------------------

AlquileresController.nuevoAlquiler = async (req, res) => {
  try {
    let alquiler = req.body;
    let resp = await models.alquileres.create({

      fechaalquiler: alquiler.fechaalquiler,
      fechadevolucion: alquiler.fechadevolucion,
      articuloIdArticulos: alquiler.articuloIdArticulos,
      usuarioIdUsuario: alquiler.usuarioIdUsuario,
    });

    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};


//ACTUALIZAMOS UN ALQUILER EXISTENTE  -------------------------------------------------

AlquileresController.actualizaAlquiler = async (req, res) => {
  try {
      let alquiler = req.body
      let resp = await models.alquileres.update(
          {           
            fechaalquiler: alquiler.fechaalquiler,
            fechadevolucion: alquiler.fechadevolucion,
                        
          },
          {
            where: { id_alquileres: alquiler.id_alquileres }
          }
      )

      res.send(resp)

  } catch (err) {
      res.send(err)
  }
}


module.exports = AlquileresController;
