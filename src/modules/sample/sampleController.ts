import { Router } from 'express';
import { capitalize } from 'lodash';

const router = Router();

router.get('/', (req, res) => {
  res.send('Sample route');
});

router.post('/', (req, res) => {
  const greeting = capitalize(req.body.greeting);
  res.send(greeting);
});

export default router;
