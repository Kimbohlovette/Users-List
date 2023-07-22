import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user/userRoutes';

// collect db information from environment variables
dotenv.config();
const port = process.env.PORT || 5000;
const dbUserName = process.env['MONGODB_NAME'];
const mongodbPwd = process.env['MONGODB_PWD'];
const mongodbAppName = process.env['MONGODB_APPNAME'];
const mongodbDatabaseName = process.env['MONGODB_DBNAME'];

// initialize express app
const app = express();

// construct mongodb url
// const MONGO_URI = `mongodb+srv://${dbUserName}:${mongodbPwd}@${mongodbAppName}.mongodb.net/${mongodbDatabaseName}?retryWrites=true&w=majority`;

// connect to mongodb using mongoose
// mongoose
// 	.connect(MONGO_URI || '', {})
// 	.then(() => {
// 		app.listen(port, () => {
// 			console.log(`Listening on port ${port}...`);
// 		});
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
	app.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
});
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.static('./public'));
app.use(express.json());

app.use('/users', userRoutes);
