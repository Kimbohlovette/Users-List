import { Request, Response } from 'express';
import { AuthModel } from '../../models/auth';
import { generateWebToken } from '../../utils/generateWebToken';
import * as dotenv from 'dotenv';
dotenv.config();
const secret = process.env['JWT_SECRET'] || '';

export const signup = async (req: Request, res: Response) => {
	const email = req.body.email;
	const password = req.body.password;
	const username = req.body.username;

	if (!email || !password || !username) {
		return res.status(401).json({
			error: 'INVALID_REQUEST_BODY',
			message: 'Incorrect email, username, or password missing.',
		});
	}
	try {
		// check against duplicate username
		const duplicateUserName = await AuthModel.find({ username: username });
		if (duplicateUserName.length > 0) {
			return res.status(401).json({
				error: 'USER_NAME_ALEADY_EXISTS',
				message: 'Username name already exists.',
			});
		}
		//check against duplicate emails
		const duplicateEmails = await AuthModel.find({ email: email });
		if (duplicateEmails.length > 0) {
			return res.status(401).json({
				error: 'EMAIL_ALEADY_EXISTS',
				message: 'Email already exists.',
			});
		}

		// don't forget to hash password before saving
		const authUser = await AuthModel.create({ username, email, password });
		// Hash password and compare
		const payload = {
			username: username,
			id: authUser._id.toHexString(),
		};

		const token = generateWebToken(secret, payload);
		return res.status(200).json({
			token,
		});
	} catch (error) {
		return res.status(500).json({
			error: 'SERVER_ERROR',
			message: 'Signup failed. This is probably a server error.',
		});
	}
};
