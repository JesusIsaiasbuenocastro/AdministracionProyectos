const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')


//crear el servidor 
const app = express();

//CONECTAR A BD 
conectarDB();

//Habilitar Cors
app.use(cors());

//Habilitar express.json nos va a permitir leer datos que el usuario coloque 
app.use(express.json({ extended: true}));

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//puerto de la app
const port = process.env.port || 4000;

//arrancar el servidor 
app.listen(port,'0.0.0.0' , ()=>{
    console.log(`EL SERVIDORESTA FUNCIONANDO EN EL PUERTO ${port} `)
})