const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const router = express.Router();


//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});


var app = express();

app.use(router);

router.get('/message', function(req, res){
    res.send('lista de mensajes');
});
router.post('/message', function(req, res){
    res.send('mensaje agregado');
});
router.delete('/message', function(req, res){
    res.send('mensaje borrado');
});
// app.use('/', function (req, res){
//     res.send("hola")
// });

app.listen(3000);

console.log('aplicacion en puerto 3000');

