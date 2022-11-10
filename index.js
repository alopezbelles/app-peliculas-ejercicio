const express = require("express");
const router = require("express").Router();

const app = express();

const db = require('./db/db.js')

// const router = require('./router')
// const models = require('./models/index')

const PORT = 3610;

//Middlewares
app.use(express.json());
app.use(router);


app.get('/', (req, res) => {res.send('Pantalla de inicio');});




//Esto no lo he tocado, pero puedo borrarlo

// app.listen(PORT, () => {     
//     console.log(`Servidor conectado en el puerto  ${PORT}`);     
//     db.authenticate().then(()=> {         
//         console.log("Conectado a la base de datos");     
//     }).catch(error => {         
//         console.log('No se ha conectado a la base de datos' + error)     
//     })
    
// });

db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //ARRANCO SERVIDOR
})
.catch((err)=> console.log(err.message)); 