require('dotenv').config();
require('express');
const express = require('express');
const app = express();


// connectDB

// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');



// error handlers
notFoundMiddleware = require('./middleware/not-Found');
errorHandlerMiddleware = require('./middleware/error-handler');


// routes
app.use('domain/api/v1/auth', authRouter)
app.use('domain/api/v1/jobs', jobsRouter)

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

