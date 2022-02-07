const store = require('./store');
const socket = require('../../socket').socket;
const boom = require('@hapi/boom');



function addMessage(chat,user, message,file){
    
    return new Promise((resolve,reject) => {
        if(!chat ||!user || !message){           
            reject( boom.notFound('Parametro necesario'));
            return false;
        }
        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost:3000/app/files/'+ file.filename;
        }
        const fullMessage = {
            chat : chat,
            user : user,
            message : message,
            date : new Date(),
            file: fileUrl
        }
        store.add(fullMessage);
        socket.io.emit('mensaje',fullMessage)
        resolve(fullMessage);
    });
}
function getMessage(filterUser){
    return new Promise((resolve,reject) => {
        resolve(store.list(filterUser));
    })
}
 function updateMessage(id,message){
    return new Promise(async(resolve,reject) => {
        if(!id || !message){
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id,message);
        resolve(result);
    });
}
function deleteMessage(id) {
    return new Promise ((resolve, reject) => {        
        if(!id){
            reject('id invalido');
            return false;
        }
        store.remove(id)
        .then(() => {
            resolve();
        })
        .catch(e => {
            reject(e);
        })
        
    });
}
module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
};