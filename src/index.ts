import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express';

const PORT = 3000;

dotenv.config();
const mongoConnString = process.env.DATABASE_URL;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})