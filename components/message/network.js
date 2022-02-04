const express = require('express');
const router = express.Router();
const response = require ('../../network/response.js');
const controller = require('./controller');

router.get('/', function(req, res){
   controller.getMessage()
   .then((messageList) => {
       response.success(req,res,messageList,200);
   })
   .catch(e => {
        response.error(req,res,'error inesperado', 500);
   });
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
router.patch('/:id', function(req,res) {   
    controller.updateMessage(req.params.id,req.body.message)
    .then((data) => {
        response.success(req,res,data,200)
    })
    .catch(e => {
        response.error(req,res,'Error interno',500);
    });
});

module.exports = router;