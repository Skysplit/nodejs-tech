import { Router } from 'express';
import { sampleRouter } from '@app/modules/sample';
import { homeRouter } from '@app/modules/home';

const router = Router();

router.use('/', homeRouter);
router.use('/sample', sampleRouter);

export default router;
