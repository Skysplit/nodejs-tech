import { Router } from 'express';
import { sampleController } from './modules/sample';

const router = Router();

router.use('/sample', sampleController);

export default router;
