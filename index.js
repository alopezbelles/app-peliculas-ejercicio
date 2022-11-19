const express = require("express");
const app = express();
const db = require('./db/db');
const { sequelize } = require("sequelize");
const router = require('./router') 

const PORT = 3610;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {res.send('Pantalla de inicio');});


//Conectamos con la base de datos
db.then(()=>{
    app.listen(PORT, ()=> console.log(`Servidor en puerto: ${PORT}`)); 
   
})
.catch((err)=> console.log(err.message)); 

