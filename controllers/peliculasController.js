//IMPORTAMOS BASE DE DATOS
const db = require("../models/peliculas");
const peliculas = db.peliculas;
// const Op = db.Sequelize.Op; //IMPORTAMOS FUNCIONES ORM DE SEQUELIZE

const peliculaController = {}

//OBTENEMOS LISTADO DE TODAS LAS PELÍCULAS
peliculaController.getAll = (req, res) => {

    peliculas.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las películas."
        });
      });
  };

  module.exports = peliculaController