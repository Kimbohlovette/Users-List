import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user/userRoutes';
import authRoutes from './routes/auth/auth';

// collect db information from environment variables
dotenv.config();
const port = process.env.PORT || 5000;

// initialize express app
const app = express();

mongoose
	.connect('mongodb://127.0.0.1:27017/users-list')
	.then(() => {
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	})
	.catch((error) => console.log('Error connecting to mongodb: ', error));
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.static('./public'));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
