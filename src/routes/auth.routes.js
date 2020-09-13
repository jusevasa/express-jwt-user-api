import { Router } from 'express';
import * as authctrl from '../controllers/auth.controller';
import { verifySignup } from '../middlewares';
const router = Router();

router.post('/signup', [verifySignup.checkDuplicateUser, verifySignup.checkRolesExisted], authctrl.signUp);
router.post('/signin', authctrl.signIn);

export default router;
