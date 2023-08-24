require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { dbConnection } = require('./config/index');

// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos

const cors = require('cors');

// conectar mongo
//Base de datos
dbConnection();

// crear el servidor
const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use('/', routes());

// carpeta publica
app.use(express.static('uploads'));


const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;
// puerto
app.listen(port, host, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});