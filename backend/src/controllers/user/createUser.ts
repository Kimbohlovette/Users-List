import { Request, Response } from 'express';
import User from '../../models/user';

export const createUser = async (req: Request, res: Response) => {
	const payload = req.body;
	try {
		const createdUser = await User.create(payload);
		return res.status(201).json({
			id: createdUser._id,
			name: createdUser.name,
			email: createdUser.email,
			phoneNumber: createdUser.phoneNumber,
			createdAt: createdUser.createdAt,
			updatedAt: createdUser.updatedAt,
			profession: createdUser.profession,
		});
	} catch (error) {
		res.status(500).json({
			error: 'SERVER_ERROR',
			message: 'An error occured while creating user',
		});
	}
};
