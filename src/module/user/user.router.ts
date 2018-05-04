import { Router, Request } from 'express';
import * as auth from '@app/middleware/auth';
import User from '@app/module/user/user.model';

const router = Router();

export interface UserRequest extends Request {
  user: User;
}

router.post('/login', auth.local);

router.get(
  '/me',
  auth.jwt,
  (req: UserRequest, res) => {
    res.send(req.user);
  },
);

export default router;
