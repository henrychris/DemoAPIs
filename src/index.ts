import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express';

// import the endpoint routes file
import { router } from './routes/routes';

// get enviroment variables defined in .env
dotenv.config();

const PORT = 3000;
const mongoConnString = process.env.DATABASE_URL;

mongoose.connect(mongoConnString);
const database = mongoose.connection;

// listen for errors during db connection
database.on('error', (error) => {
	console.log(error);
});

// checks that connection succeeded
database.once('connected', () => {
	console.log("Connection Successful.");
});


const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
});

// specify a base route for endpoints, and
// a routing file to use
app.use('/api', router);