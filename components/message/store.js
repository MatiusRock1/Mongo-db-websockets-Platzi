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
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(){
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add : addMessage,
    list: getMessage,
    //get
    //update
    //delete
}