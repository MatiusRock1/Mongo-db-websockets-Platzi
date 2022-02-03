const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require ('body-parser');
const response = require ('./network/response');
const { ok } = require('assert');


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
    response.success(req,res,'lista de mensajes');
});
router.post('/message', function(req, res){
    console.log(req.body);
    console.log(req.query);
    if(req.query.error == "ok"){
        response.success(req,res,'error creando', 400);
    }
    else {
        response.success(req,res,'creado correctamente', 201);
    }
    res.status(201);
    //res.send({error : '' , message : "creado correctamente"});
    
});
router.delete('/message', function(req, res){
    res.status(201);
    res.send({error : ''});
});

app.use('/app', express.static('public'));

app.listen(3000);



