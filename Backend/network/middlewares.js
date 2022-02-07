const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');
const {logErrors,errorHandler} = require('../middlewares/error.handler');
const middlewares = function(server){
    server.use(logErrors);
    server.use(errorHandler);
}



module.exports = middlewares;