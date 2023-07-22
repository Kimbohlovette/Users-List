import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
	return res.status(201).json({ message: 'Hello world' });
};
