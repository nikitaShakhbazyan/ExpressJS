const {constants} = require('../constants')

const errorHandler = (err,req,res,next) => {
    const status = res.status ? res.status : 500;

    switch (status) {
        case constants.VALIDATION_ERROR:
            res.json({title : "Validation Failed",
            message : err.message,
            stackTrace : err.stack
        })
            break;
        case constants.NOT_FOUND :
            res.json({title : "Not Found",
            message : err.message,
            stackTrace : err.stack
        })
            break
        case constants.FORBIDDEN :
            res.json({title : "Forbidden",
            message : err.message,
            stackTrace : err.stack
        })
            break
        case constants.UNAUTHORIZED :
            req.json({title:"Unauthorized",
            message: err.message,
            stackTrace:err.stack
        })
            break 
        case constants.SERVER_ERROR :
            req.json({title:"Server Error",
            message:err.message,
            stackTrace:err.stack
        })
            break
        default:
            console.log("There is no errors!!")
            break;
    }


}

module.exports = errorHandler