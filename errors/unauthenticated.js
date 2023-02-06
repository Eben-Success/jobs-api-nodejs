const CustomAPIError = require('./custom-api');
const {StatusCodes} = require('http-status-codes');

class UnathenticatedError extends CustomAPIError {
    constructor(message){
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnathenticatedError;