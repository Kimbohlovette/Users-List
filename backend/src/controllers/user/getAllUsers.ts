import { Request, Response } from 'express';
import User from '../../models/user';

export const getAllUsers = async (req: Request, res: Response) => {
	const page = req.query['page'];
	const limit = req.query['limit'];

	const pageNum = page ? Number(page) : 1;
	const pageLimit = limit ? Number(limit) : 15;

	try {
		const users = await User.find({})
			.sort({ _id: -1 })
			.skip(pageNum > 0 ? (pageNum - 1) * pageLimit : 0)
			.limit(pageLimit);
		return res.status(200).json({
			users: users.map((user) => ({
				id: user._id,
				name: user.name,
				email: user.email,
				phoneNumber: user.phoneNumber,
				profession: user.profession,
				createdAt: user.createdAt,
				updatedAt: user.updatedAt,
			})),
		});
	} catch (error) {
		return res.status(500).json({
			error: 'SERVER_ERROR',
			message: 'An error occured while fetching users',
		});
	}
};
