const PeliculasController = {};

const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");  


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODAS LAS PELÍCULAS -------------------------------------------------

PeliculasController.getPeliculasAll = async (req, res) => {
  try {
    let resp = await models.peliculas.findAll({
     
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS PELICULA POR ID ---------------------------------------------------------------

PeliculasController.getPeliculasById = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.peliculas.findAll({
      
        where: { id_pelicula: id },
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS PELICULA POR TITULO -----------------------------------------------------------

PeliculasController.getPeliculasByTitulo = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.peliculas.findAll({
      
        where: { titulo: titulo },
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};


//OBTENEMOS PELICULA POR GENERO -------------------------------------------------------------------

PeliculasController.getPeliculasByGenero = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.peliculas.findAll({
      
        where: { genero: genero },
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};


//OBTENEMOS PELICULAS TOP RATED-------------------------------------------------------------------------

PeliculasController.getPeliculasTopRated = async (req, res) => {
  try {
    // const id = req.params.id;
    let resp = await models.peliculas.findAll({
      
      where: {valoracion: {[Op.gt]: 4}},
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS PELICULAS EN CINES ACTUALMENTE -------------------------------------------------------------------------

PeliculasController.getPeliculasEnCine = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.series.findAll({
      
      where: { cine: true},
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};


module.exports = PeliculasController;
