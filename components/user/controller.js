const store = require('./store');


function addUser(name){    
        if(!name){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return Promise.reject('invalid name');
        }
        const user = {
            name : name,
        }
        return store.add(user);      
    
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
    addUser,
    getMessage,
    updateMessage,
    deleteMessage,
};