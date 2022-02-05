const express = require('express');
const router = express.Router();
const response = require ('../../network/response.js');
const controller = require('./controller');

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