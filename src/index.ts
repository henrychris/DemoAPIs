import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express';

const PORT = 3000;
const mongoConnString = process.env.DATABASE_URL;

// get enviroment variables defined in .env
dotenv.config();

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})