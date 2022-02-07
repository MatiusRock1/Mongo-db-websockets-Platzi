const { version } = require('mongoose');
const store = require('./store');

function addChat(user){    
        if(!user || !Array.isArray(user)){
            console.error('[messageController] No hay usuario');
            return Promise.reject('Los datos son incorrectos')
        }
        const users = {
            users: user
        }
        return store.add(users)
    
}

function listChat (userid){
    return store.list(userid)
}

module.exports = {
    addChat,
    listChat
}