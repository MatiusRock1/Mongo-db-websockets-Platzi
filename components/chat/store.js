
const { populate } = require('./model');
const Model = require('./model');

function addChat(message){
    const myMessage = new Model(message);
    return myMessage.save();
}

async function getChat(filterUser){
    return new Promise((resolve,reject) =>{
        let filter = {};
        if(filterUser !== null){
            filter = {users: filterUser };
        }
        Model.find(filter)
        .populate('users')
        .exec((error,populated) =>{
            if (error){
                reject(error);
                return false;
            }
            resolve(populated);
        })
        
        
    });
    
    
}

module.exports = {
    add : addChat,
    list: getChat,
    


    //get
    //update
    //delete
}