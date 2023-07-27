import express from 'express';
import { signup } from '../../controllers/auth/signup';
import { signin } from '../../controllers/auth/signin';
import { verifyAuthToken } from '../../middlewares/validateJWT';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
