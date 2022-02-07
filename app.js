const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require ('body-parser');
const db = require('./db');

//const io = require('socket.io');

const { ok } = require('assert');
const router = require('./network/routes');
const { isObject } = require('util');


//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});
//creacion de conexion con base de datos mongo
db.connectMongoDB(process.env.Mondodb)




//configuracion de socket

const io = require('socket.io')(server);
io.on('connection', function(socket){
    console.log("nuevo cliente cocnectado");
    socket.emit('mensaje','bienvenido');
});
setInterval(function () {
    io.emit('mensaje','hola os escribo a todos');
}, 3000)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router(app);

server.listen(3000);
/*server.listen(8080, function(){
    console.log('Servidor iniciado en http:localhost:8080')
})*/



