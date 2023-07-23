import { Request, Response } from 'express';
import { AuthModel } from '../../models/auth';
import * as dotenv from 'dotenv';
dotenv.config();
const secret = process.env['JWT_SECRET'] || '';

export const signin = async (req: Request, res: Response) => {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(401).json({
			error: 'INVALID_EMAIL_PASSWORD_COMBINATION',
			message: 'incorect email or password combination',
		});
	}
	try {
		const dbAuthInfo = await AuthModel.findOne({ email: email });
		if (!dbAuthInfo) {
			return res.status(401).json({
				error: 'INVALID_EMAIL_PASSWORD_COMBINATION',
				message: 'incorect email or password combination',
			});
		}
		// Hash password and compare
		if (dbAuthInfo.password !== password) {
			return res.status(400).json({
				error: 'INVALID_EMAIL_PASSWORD_COMBINATION',
				message: 'incorect email or password combination',
			});
		}
		const payload = {
			username: dbAuthInfo.username || '',
			id: dbAuthInfo._id.toHexString(),
		};
		const token = generateWebToken(secret, payload);
		return res.status(200).json({
			token,
		});
	} catch (error) {
		return res.status(500).json({
			error: 'SERVER_ERROR',
			message: 'could not authenticate user. Try again later',
		});
	}
};
