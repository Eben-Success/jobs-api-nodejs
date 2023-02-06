const {StatusCodes} = require('http-status-codes');

class CustomAPIError extends Error {
    constructor(message) {
        this.message
    }
}

module.exports = CustomAPIError