import { Router } from 'express';
import { sampleController } from './modules/sample';
import { homeController } from './modules/home';
const router = Router();

router.use('/', homeController);
router.use('/sample', sampleController);

export default router;
