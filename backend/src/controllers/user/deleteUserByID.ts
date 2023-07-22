import { Request, Response } from 'express';
import User from '../../models/user';

export const deleteUser = async (req: Request, res: Response) => {
	const id = String(req.params['id']);
	if (!id) {
		return res.status(400).json({
			error: 'INVALID_QUERY_PARAMS',
			message: 'id param is required',
		});
	}
	try {
		const deleted = await User.findByIdAndDelete(id);
		if (!deleted) {
			res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		} else {
			res.status(200).json({
				deletedId: deleted._id.toString(),
			});
		}
	} catch (error) {
		res.status(500).json({
			error: 'SERVER_ERROR',
			message: 'A server error occured while deleting the user',
		});
	}
};
