const express = require('express');

function corsoptions (){
    const whitelist = ['http://localhost:3000','https://matiusrock.com',]
    const options = {
        Host: (Host, callback) => {
                console.log(whitelist);
                console.log(Host);
                if(whitelist.includes(Host)){
                    callback(null,true);
                }
                else{
                    callback(new Error('no permitido'))
                }
            }
        }
 return options;  
}
module.exports = {
    corsoptions
};