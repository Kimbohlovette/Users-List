import { Request, Response } from 'express';
import User from '../../models/user';

export const updateUser = async (req: Request, res: Response) => {
	const id = String(req.params['id']);
	const payload = req.body;
	if (!id) {
		return res.status(404).json({
			error: 'USER_NOT_FOUND',
			message: 'id param is required',
		});
	}
	try {
		const updated = await User.findByIdAndUpdate(id, payload);
		if (!updated) {
			return res.status(404).json({
				error: 'USER_NOT_FOUND',
				message: 'Requested user not found',
			});
		} else {
			return res.status(200).json({
				updated: {
					id: updated._id.toString(),
					name: updated.name,
					email: updated.email,
					phoneNumber: updated.phoneNumber,
					profession: updated.profession,
					createdAt: updated.createdAt,
					updatedAt: updated.updatedAt,
					...payload,
				},
			});
		}
	} catch (error) {
		// console.log(error);
		return res.status(500).json({
			error: 'SERVER_ERROR',
			message: 'Error occured while updating user',
		});
	}
};
