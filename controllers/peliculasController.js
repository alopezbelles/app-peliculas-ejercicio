//IMPORTAMOS BASE DE DATOS
const db = require("../models/peliculas");
const peliculas = db.peliculas;

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const Op = db.Sequelize.Op; 

//OBJETO CONTROLADOR
const PeliculasController = {} 


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODAS LAS PELÍCULAS//
PeliculasController.getAll = (req, res) => {

    peliculas.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido un error al intentar acceder a las películas."
        });
      });
  };


//OBTENEMOS PELICULA POR ID//
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
        message: "Ha surgido un error al intentar acceder a la película con el id " + id + "."
      });
    });
};

//OBTENEMOS PELICULA POR TITULO//
PeliculasController.getByTitulo = (req, res) => {

  let titulo = req.params.titulo;
  
  peliculas.findAll( {where: {titulo: titulo}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha surgido un error al intentar acceder a las películas."
      });
    });
};

//OBTENEMOS PELICULA POR GENERO
PeliculasController.getByGenero = (req, res) => {

  let genero = req.params.genero;
  
  peliculas.findAll( {where: {genero: genero}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha surgido un error al intentar acceder a las películas."
      });
    });
};


//OBTENEMOS PELICULA POR PASE EN CINES
PeliculasController.getByCines = (req, res) => {

  let cines = req.params.cines;
  
  peliculas.findAll( {where: {cines: true}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha surgido un error al intentar acceder a las películas."
      });
    });
};



  module.exports = PeliculasController