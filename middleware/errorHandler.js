const errorHandler = (err,req,res,next) => {
    const status = res.status ? res.status : 500;
    res.json({message : err.message, stackTrace : err.stack})
}

module.exports = errorHandler