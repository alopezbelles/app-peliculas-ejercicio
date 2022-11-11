const express = require("express");
const app = express();
const db = require('./db/db.js')
const router = require('./router') 


const PORT = 3610;


// const router = require("express").Router();  //esto lo podré borrar, pero de momento no





//Middlewares
app.use(express.json());
app.use(router);


app.get('/', (req, res) => {res.send('Pantalla de inicio');});



//Conectamos con la base de datos

db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //ARRANCO SERVIDOR
})
.catch((err)=> console.log(err.message)); 