import { Router } from 'express';
import homeRouter from '@app/module/home/home.router';
import userRouter from '@app/module/user/user.router';

const router = Router();

router.use('/', homeRouter);
router.use('/users', userRouter);

export default router;
