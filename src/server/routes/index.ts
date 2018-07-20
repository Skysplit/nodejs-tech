import { Router } from 'express';
import apiRoutes from './api';
import webRoutes from './web';

const router = Router();

router.use(webRoutes);
router.use('/api', apiRoutes);

export default router;
