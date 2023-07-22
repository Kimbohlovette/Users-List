import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = process.env['PORT'] || 3030;
const CLUSTER = process.env['CLUSTER'];
const MONGODB_PWD = process.env['MONGODB_PWD'];
const DB_NAME = process.env['MONGODB_NAME'];
const app = express();

const PATH = `mongodb+srv://kimbohlovette:${MONGODB_PWD}@${CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose
	.connect(PATH || '', {})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Listening on port ${PORT}...`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/sessions', userRoutes);
