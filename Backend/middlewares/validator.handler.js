const boom = require('@hapi/boom');

 function validatorHandler(schema,property){
    return (req, res, next) =>{
        
        const data = req[property];        
        const { error } =  schema.validateAsync(data);
        if(error){
            console.log(error);
            next(boom.badRequest(error));
        }
        next();
    } 
}



module.exports = {
    validatorHandler,
}