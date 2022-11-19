const PeliculasController = {};

const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");  


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODAS LAS PELÍCULAS -------------------------------------------------

PeliculasController.todasPeliculas = async (req, res) => {
  try {
    let resp = await models.peliculas.findAll({
     
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS PELICULA POR ID ---------------------------------------------------------------

PeliculasController.peliculasPorId = async (req, res) => {
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

PeliculasController.peliculasPorTitulo = async (req, res) => {
  try {
    
    let titulo = req.params.titulo;
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

PeliculasController.peliculasPorGenero = async (req, res) => {
  try {
    
    let genero = req.params.genero;
    let resp = await models.peliculas.findAll({     
      
        where: { genero: genero } ,
      })
        res.send(resp);
    
  } catch (err) {
    res.send(err);
  }
};


//OBTENEMOS PELICULAS TOP RATED-------------------------------------------------------------------------

PeliculasController.peliculasTopRated = async (req, res) => {
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

PeliculasController.peliculasEnCine = async (req, res) => {
  try {

    let resp = await models.peliculas.findAll({
      
      where: {cine: true},
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};


module.exports = PeliculasController;
