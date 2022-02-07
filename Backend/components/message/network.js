const express = require('express');
const router = express.Router();
const response = require ('../../network/response.js');
const controller = require('./controller');
const multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/files/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })


const upload = multer({
    storage: storage
});

router.get('/', function(req, res){
    const filterMessages = req.query.user  ||  null ;
   controller.getMessage(filterMessages)
   .then((messageList) => {
       response.success(req,res,messageList,200);
   })
   .catch(e => {
    next(e);
    //response.error(req,res,'error inesperado', 500);
   });
});
router.post('/',upload.single('file'), function(req, res,next){
    console.log(req.file);
   controller.addMessage(req.body.chat,req.body.user, req.body.message,req.file)
   .then((fullMessage) => {
    response.success(req,res,fullMessage, 201);
   })
   .catch(e => {
       console.log(e);
       next(e);
    //response.error(req,res,'error creando', 400);
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
router.delete('/:id', function(req,res){
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req,res, `Usuario ${req.params.id} eliminado`,200);
    })
    .catch(e => {
        response.error(req,res,'Error interno',500);
    })
});

module.exports = router;