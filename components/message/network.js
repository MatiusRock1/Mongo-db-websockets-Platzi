const express = require('express');
const router = express.Router();
const response = require ('../../network/response.js');

router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header" : "Nuestro header personalizado",
    });
    response.success(req,res,'lista de mensajes');
});
router.post('/', function(req, res){
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
router.delete('/', function(req, res){
    res.status(201);
    res.send({error : ''});
});

module.exports = router;