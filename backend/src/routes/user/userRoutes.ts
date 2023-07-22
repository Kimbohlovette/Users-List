import express from 'express';
import { createUser } from '../../controllers/user/createUser';
import { validatePayload } from '../../middlewares/validatePayload';
import { getAllUsers } from '../../controllers/user/getAllUsers';

const router = express.Router();

router.post('/', validatePayload, createUser);
router.get('/', getAllUsers);

export default router;
