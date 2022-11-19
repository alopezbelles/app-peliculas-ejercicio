const SeriesController = {};

const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize"); 


/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

//OBTENEMOS LISTADO DE TODAS LAS SERIES  -------------------------------------------------

SeriesController.todasSeries = async (req, res) => {
  try {
    let resp = await models.series.findAll({
     
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

//OBTENEMOS SERIE POR ID ---------------------------------------------------------------

SeriesController.seriesPorId = async (req, res) => {
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

SeriesController.seriesPorTitulo = async (req, res) => {
  try {
    
    let titulo = req.params.titulo;
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

SeriesController.seriesTopRated = async (req, res) => {
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

SeriesController.seriesProximoEpisodio = async (req, res) => {
  try {
    
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
