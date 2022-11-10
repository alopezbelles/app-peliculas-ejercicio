//IMPORTAMOS BASE DE DATOS
const db = require("../models/series");
const series = db.series;

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const Op = db.Sequelize.Op; 

//OBJETO CONTROLADOR
const SeriesController = {} 

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODAS LAS SERIES//
SeriesController.getSeriesAll = (req, res) => {

    series.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido un error al intentar acceder a las series."
        });
      });
  };


  //OBTENEMOS SERIE POR ID//
  SeriesController.getSeriesById = (req, res) => {
    const id = req.params.id;
  
    series.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No existe la serie con el id ${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ha surgido un error al intentar acceder a la serie con el id " + id + "."
        });
      });
  };

  //OBTENEMOS PELICULA POR TITULO//
    SeriesController.getSeriesByTitulo = (req, res) => {

    let titulo = req.params.titulo;
    
    series.findAll( {where: {titulo: titulo}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido un error al intentar acceder a las series."
        });
      });
  };


//OBTENEMOS SERIES TOP RATED
SeriesController.getSeriesTopRated = (req, res) => {

    series.findAll( {where: {valoracion: {[Op.gt]: 4}}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido un error al intentar acceder a las series."
        });
      });
  };


  module.exports = SeriesController