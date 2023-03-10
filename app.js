require('dotenv').config();
require('http-status-codes');

const express = require('express');
const app = express();


// connectDB
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handlers
const notFoundMiddleware = require('./middleware/not-Found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// app.get('/', (req, res) => {
//     res.send('jobs api');
// })


// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();

