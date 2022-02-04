const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require ('body-parser');

const { ok } = require('assert');
const router = require('./network/routes');


//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);



