const errorHandler = (err,req,res,next) => {
    const status = res.status ? res.status : 500;

    switch (status) {
        case 400:
            res.json({title : "Validation Failed",
            message : err.message,
            stackTrace : err.stack
        })
            break;
        case 404 :
            res.json({title : "Not Found",
            message : err.message,
            stackTrace : err.stack
        })
        default:
            break;
    }


}

module.exports = errorHandler