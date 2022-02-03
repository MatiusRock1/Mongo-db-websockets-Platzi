const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require ('body-parser')


//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header" : "Nuestro header personalizado",
    });
    res.send('lista de mensajes');
    
});
router.post('/message', function(req, res){
    console.log(req.body);
    console.log(req.query);
    res.send('mensaje agregado');
});
router.delete('/message', function(req, res){
    
    res.send('mensaje borrado');
});
// app.use('/', function (req, res){
//     res.send("hola")
// });

app.listen(3000);



