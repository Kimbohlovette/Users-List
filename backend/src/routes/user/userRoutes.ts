import express from 'express';
import { createUser } from '../../controllers/user/createUser';
import { validatePayload } from '../../middlewares/validatePayload';
import { getAllUsers } from '../../controllers/user/getAllUsers';
import { deleteUser } from '../../controllers/user/deleteUserByID';
import { updateUser } from '../../controllers/user/updateUserByID';

const router = express.Router();

router.post('/', validatePayload, createUser);
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;
