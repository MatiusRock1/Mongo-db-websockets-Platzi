function logErrors(err,req, res,next){
    console.log('log errors');
    console.error(error);
    next(err);
}

function errorHandler(err,req, res,next){
    console.log('log errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
    
}

module.exports = {
    logErrors,
    errorHandler,
}