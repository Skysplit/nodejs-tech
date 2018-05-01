import { Router } from 'express';
import { homeRouter } from '@app/modules/home';
import { listRouter } from '@app/modules/list';

const router = Router();

router.use('/', homeRouter);
router.use('/lists', listRouter);

export default router;
