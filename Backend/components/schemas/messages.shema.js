const joi = require('joi');

const user = joi.string().guid({
    version: [
        'uuidv4',
        'uuidv5'
    ]
});
const chat = joi.string().guid({
    version: [
        'uuidv4',
        'uuidv5'
    ]
});
const message = joi.string().alphanum().min(3).max(60);

const createMessageShema = joi.object({
    user: user.required(),
    chat: chat.required(),
    message: message.required()
});

module.exports = {
     createMessageShema,
}