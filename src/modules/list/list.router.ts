import { Router, Request } from 'express';
import { List } from '@app/modules/list';
import { taskRouter } from './task';

const router = Router();

export interface ListRequest extends Request {
  list?: List;
}

router.param('id', async (req: ListRequest, res, next, value: string) => {
  const list = await List.findOne({
    relations: ['tasks'],
    where: { id: value },
  });

  if (list) {
    req.list = list;
    return next();
  }

  res.status(404);
  next(new Error('List not found'));
});

router.get('/', async (req, res) => {
  const lists = await List.find();
  res.send(lists);
});

router.get('/:id', (req: ListRequest, res) => {
  res.send(req.list);
});

// Tasks subroute
router.use('/:id/tasks', taskRouter);

export default router;
