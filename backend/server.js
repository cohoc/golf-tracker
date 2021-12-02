import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoute from './routes/userRoute.js'
import logRoute from './routes/logRoute.js'

dotenv.config()

const app = express();
const port = 5000;
const uri = process.env.MONGO_URI;

//initialize middleware
app.use(cors());
app.use(express.json());

mongoose.connect(uri, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true 
    }
)
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

//routes
app.use('/users', userRoute);
app.use('/logs', logRoute);


app.listen(port, () => {
    console.log(`Expense tracker listening on port ${port}`)
})