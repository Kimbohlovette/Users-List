import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'name field is required'],
		},
		phoneNumber: {
			type: String,
			required: [true, 'phoneNumber field is required'],
		},
		email: {
			type: String,
			required: [true, 'email field cannot be empty'],
		},
		profession: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

UserSchema.index({ '$**': 'text' });
const User = mongoose.model('User', UserSchema);

export default User;
