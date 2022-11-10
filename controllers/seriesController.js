//IMPORTAMOS BASE DE DATOS
const db = require("../models/series");
const series = db.series;

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const Op = db.Sequelize.Op; 

//OBJETO CONTROLADOR
const SeriesController = {} 

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////