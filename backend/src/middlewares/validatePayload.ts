import { NextFunction, Request, Response } from 'express';

export function validatePayload(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const payload = req.body;

	if (!payload) {
		return res.status(400).json({
			error: 'INVALID_REQUEST_BODY',
			message: 'Empty request body',
		});
	}

	if (!payload['name']) {
		return res.status(400).json({
			error: 'INVALID_REQUEST_BODY',
			message: 'User name cannot be empty',
		});
	}
	if (!payload['email']) {
		return res.status(400).json({
			error: 'INVALID_REQUEST_BODY',
			message: 'User email cannot be empty',
		});
	}
	if (!payload['phoneNumber']) {
		return res.status(400).json({
			error: 'INVALID_REQUEST_BODY',
			message: 'User phoneNumber cannot be empty',
		});
	}
	return next();
}
