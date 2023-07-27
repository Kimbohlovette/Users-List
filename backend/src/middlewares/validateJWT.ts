import { NextFunction, Request, Response } from 'express';
import { AuthModel } from '../models/auth';

const jwt = require('jsonwebtoken');
const secret = process.env['JWT_SECRET'] || 'secretpassword';

export const verifyAuthToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers['authorization']?.trim();
	if (!token) {
		return res.status(401).json({
			message: 'No authorization headers',
			error: 'INVALID_HEADER',
		});
	}
	const parts = token.split(' ');
	if (parts[0].toLowerCase() !== 'bearer') {
		return res.status(401).json({
			message: `Authorization header must start with "Bearer"`,
			code: 'INVALID_HEADER',
		});
	}
	if (parts.length === 1) {
		return res.status(401).json({
			message: `Token not found in authorization header`,
			code: 'INVALID_HEADER',
		});
	}
	if (parts.length > 2) {
		return res.status(401).json({
			message: `Authorization must be bearer token`,
			code: 'INVALID_HEADER',
		});
	}
	const jwtToken = parts[1];
	try {
		const decoded = jwt.verify(jwtToken, secret, { algorithm: 'HS256' });
		if (!decoded || !decoded['id']) {
			return res.status(401).json({
				message: `Payload must have an id field`,
				code: 'INVALID_HEADER',
			});
		}

		// check if user exists
		const count = await AuthModel.findById(decoded['id']).count();

		if (count < 1) {
			return res.status(403).json({
				message: `You don't have enough permissions to access this resource.`,
				code: 'PERMISSION_DENIED',
			});
		}
		//permitted
		next();
	} catch (error) {
		console.log('Error occured: ', error);
	}
};
