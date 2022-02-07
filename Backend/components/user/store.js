
const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

async function getUser(filterUser){
    let filter = {};
    if(filterUser !== null){
        filter = {name: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateUser(id,message){
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage= await foundMessage.save();
    return newMessage;
}
function removeUser(id){
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add : addUser,
    list: getUser,
    updateText: updateUser,
    remove: removeUser,


    //get
    //update
    //delete
}