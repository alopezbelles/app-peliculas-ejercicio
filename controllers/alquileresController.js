const AlquileresController = {};

const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");  

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE LOS ALQUILERES  -------------------------------------------------

AlquileresController.todosAlquileres = async (req, res) => {
    try {
      let resp = await models.alquileres.findAll({
       
      });
      res.send(resp);
    } catch (err) {
      res.send(err);
    }
  };









module.exports = AlquileresController;
