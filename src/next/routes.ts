import Router from 'next-routes';

const router = new Router();

router.add('/', 'home');
router.add('/test', 'test');

export default router;
