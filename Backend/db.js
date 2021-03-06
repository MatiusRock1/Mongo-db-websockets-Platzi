const db = require('mongoose');
db.Promise = global.Promise;

async function connectMongoDB (url){
    await db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db]Conectada con exito');
}

module.exports = {
    connectMongoDB
}
