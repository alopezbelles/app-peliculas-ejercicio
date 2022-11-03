const express = require("express");
const app = express();

const db = require('./db/db')

const router = require('./router')
const models = require('./models/index')

const PORT = 3000;

app.use(express.json());
app.use(router);
// app.use(models);






app.listen(PORT, () => {     
    console.log(`Servidor conectado en el puerto  ${PORT}`);     
    db.authenticate().then(()=> {         
        console.log("Conectado a la base de datos");     
    }).catch(error => {         
        console.log('No se ha conectado a la base de datos' + error)     
    })
    
});