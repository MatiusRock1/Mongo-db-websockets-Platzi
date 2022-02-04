


function addMessage(user, message){
    return new Promise((resolve,reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user : user,
            message : message,
            date : new Date()
        }
        resolve(fullMessage);
    });
}

module.exports = {
    addMessage,
};