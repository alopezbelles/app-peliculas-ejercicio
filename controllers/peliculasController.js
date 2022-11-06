//IMPORTAMOS BASE DE DATOS
const db = require("../models/peliculas");
const peliculas = db.peliculas;
// const Op = db.Sequelize.Op; //IMPORTAMOS FUNCIONES ORM DE SEQUELIZE

const PeliculasController = {}

//OBTENEMOS LISTADO DE TODAS LAS PELÍCULAS
PeliculasController.getAll = (req, res) => {

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


//OBTENEMOS PELICULA POR ID
PeliculasController.getById = (req, res) => {
  const id = req.params.id;

  peliculas.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No existe la película con el id ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ha surgido algún error al intentar acceder a la película con el id " + id + "."
      });
    });
};

//OBTENEMOS PELICULA POR TITULO
PeliculasController.getByTitulo = (req, res) => {

  let titulo = req.params.titulo;
  
  peliculas.findAll( {where: {titulo: titulo}})
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

//OBTENEMOS PELICULA POR GENERO
PeliculasController.getByGenero = (req, res) => {

  let titulo = req.params.genero;
  
  peliculas.findAll( {where: {genero: genero}})
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



  module.exports = PeliculasController