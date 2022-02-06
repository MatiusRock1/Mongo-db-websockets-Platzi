const express = require('express');
const router = express.Router();
const response = require ('../../network/response.js');
const controller = require('./controller');

router.get('/', function(req,res){
    const filterUser = req.query.user || null;
    controller.listChat(filterUser)
    .then((data) => {
        response.success(req,res,data,200);
    })
    .catch(err =>{
        response.error(req,res,'error inesperado', 500);
    });
})

router.post('/', function(req,res){
    controller.addChat(req.body.users)
    .then((data) => {
        response.success(req,res,data,200);
   })
   .catch(e => {
        response.error(req,res,'error inesperado', 500);
   });
});


module.exports = router;