import express from 'express';
import { createUser } from '../../controllers/user/createUser';
import { validatePayload } from '../../middlewares/validatePayload';
import { getAllUsers } from '../../controllers/user/getAllUsers';
import { deleteUser } from '../../controllers/user/deleteUserByID';
import { updateUser } from '../../controllers/user/updateUserByID';
import { verifyAuthToken } from '../../middlewares/validateJWT';

const router = express.Router();

router.post('/', validatePayload, verifyAuthToken, createUser);
router.get('/', getAllUsers);
router.delete('/:id', verifyAuthToken, deleteUser);
router.patch('/:id', verifyAuthToken, updateUser);

export default router;
