const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require ('body-parser');
const db = require('./db');

const { ok } = require('assert');
const router = require('./network/routes');

//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});
//creacion de conexion con base de datos mongo
db.connectMongoDB(process.env.Mondodb)



var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);



app.listen(3000);



