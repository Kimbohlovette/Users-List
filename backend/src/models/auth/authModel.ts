import mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'email field is required'],
	},
	password: {
		type: String,
		required: [true, 'password field is required'],
	},
});

export const AuthModel = mongoose.model('AuthModel', AuthSchema);
