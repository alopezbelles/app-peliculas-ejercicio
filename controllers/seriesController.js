const SeriesController = {};

const models = require("../models/series");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
// const Op = db.Sequelize.Op;
// const { Op } = require("sequelize");  //esto es para cuando use la opcion OP top rated

//OBJETO CONTROLADOR

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODAS LAS SERIES  -------------------------------------------------

SeriesController.getSeriesAll = async (req, res) => {
  try {
    let resp = await models.series.findAll({
      where: { type: "Serie" },
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS SERIE POR ID ---------------------------------------------------------------

SeriesController.getSeriesById = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.series.findAll({
      
        where: { id_serie: id },
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS SERIE POR TITULO -----------------------------------------------------------

SeriesController.getSeriesByTitulo = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.series.findAll({
      
        where: { titulo: titulo },
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};


//OBTENEMOS SERIES TOP RATED-------------------------------------------------------------------------

SeriesController.getSeriesTopRated = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.series.findAll({
      
      where: {valoracion: {[Op.gt]: 4}},
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS SERIES POR ESTRENO DE PRÓXIMO EPISODIO -------------------------------------------------------------------------

SeriesController.getSeriesTopRated = async (req, res) => {
  try {
    const id = req.params.id;
    let resp = await models.series.findAll({
      
      where: { proximo: true},
      })
      .then((resp) => {
        res.send(resp);
      });
  } catch (err) {
    res.send(err);
  }
};



module.exports = SeriesController;
