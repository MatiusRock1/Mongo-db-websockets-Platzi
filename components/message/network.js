const express = require('express');
const router = express.Router();
const response = require ('../../network/response.js');
const controller = require('./controller');

router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header" : "Nuestro header personalizado",
    });
    response.success(req,res,'lista de mensajes');
});
router.post('/', function(req, res){
   controller.addMessage(req.body.user, req.body.message)
   .then((fullMessage) => {
    response.success(req,res,fullMessage, 201);
   })
   .catch(e => {
    response.error(req,res,'error creando', 400);
   });
   
    
    //res.send({error : '' , message : "creado correctamente"});
    
});
router.delete('/', function(req, res){
    res.status(201);
    res.send({error : ''});
});

module.exports = router;