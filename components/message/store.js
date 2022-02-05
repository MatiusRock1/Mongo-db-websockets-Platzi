const db = require('mongoose');
const Model = require('./model');

//  MatiusRock1  Sm4DCZhEicueY4Yb

//
db.Promise = global.Promise;
db.connect('mongodb+srv://MatiusRock1:Sm4DCZhEicueY4Yb@cluster0.lva38.mongodb.net/telegram?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});
console.log('[db]Conectada con exito');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {};
    if(filterUser !== null){
        filter = {user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id,message){
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage= await foundMessage.save();
    return newMessage;
}

module.exports = {
    add : addMessage,
    list: getMessage,
    updateText: updateText,


    //get
    //update
    //delete
}