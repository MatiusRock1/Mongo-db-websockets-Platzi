const joi = require('joi');

const user = joi.string().uuid();
const chat = joi.string().uuid();
const message = joi.string().alphanum().min(3).max(60);

const createMessageShema = joi.object({
    user: user.required(),
    chat: chat.required(),
    message: message.required()
});

module.exports = {
    createMessageShema,
}