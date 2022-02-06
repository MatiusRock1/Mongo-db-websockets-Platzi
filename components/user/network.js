const express = require('express');
const router = express.Router();
const response = require ('../../network/response.js');
const controller = require('./controller');

router.get('/', function(req,res){
    const filterUser = req.query.user || null;    
    controller.getUser(filterUser)
    .then((messageUser)=> {
        response.success(req,res,messageUser,200);
    })
    .catch(err =>{
        response.error(req,res,'error inesperado', 500);
    });
});

router.post('/', function(req,res){
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req,res,data,201);
    })
    .catch(err => {
        response.error(req,res,'error creando', 400);
    });
})

module.exports = router;