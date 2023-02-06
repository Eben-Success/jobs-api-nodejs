const {CustomAPIError} = require('../errors/custom-api');
const {StatusCodes} = require('http-status-codes');

const errorHandlerMiddlware = (err, req, res, next) => {
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
}

module.exports = errorHandlerMiddlware;