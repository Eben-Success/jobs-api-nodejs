require('dotenv').config();
require('express');
const express = require('express');
const app = express();


// error handlers
notFoundMiddleware = require('./middleware/not-Found');
errorHandlerMiddleware = require('./middleware/error-handler');


// routes
app.use('/', (req, res) => {
    res.send('jobs-api');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000

const start = async () => {
    try {
        console.log(`Server is listening on port ${port}`);
    } catch (error) {
        console.log(error);
    }
}

start();

