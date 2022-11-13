const PeliculasController = {};

// const res = require('express/lib/response');

const models = require("../models/peliculas");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
// const Op = db.Sequelize.Op;
// const { Op } = require("sequelize");  //esto es para cuando use la opcion OP top rated

//OBJETO CONTROLADOR

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODAS LAS PELÍCULAS -------------------------------------------------

PeliculasController.getPeliculasAll = async (req, res) => {
  try {
    let resp = await models.peliculas.findAll({
      where: { type: "Película" },
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
    const id = req.params.id;
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



module.exports = PeliculasController;
