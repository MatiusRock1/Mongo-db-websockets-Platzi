const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors')
const server = require('http').Server(app);
const bodyParser = require ('body-parser');
const socket = require('./socket.js');
const db = require('./db');
const { ok } = require('assert');
const router = require('./network/routes');
const { isObject } = require('util');

//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});
//creacion de conexion con base de datos mongo
db.connectMongoDB(process.env.Mondodb)
//configuracion de cors
//app.use(cors);
//configuracion de socket
socket.connect(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router(app);

server.listen(3000, function(){
    console.log('Servidor iniciado en http:localhost:3000')
})
/*server.listen(8080, function(){
    console.log('Servidor iniciado en http:localhost:8080')
})*/



