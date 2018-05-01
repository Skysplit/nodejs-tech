import { Router } from 'express';
import { ListRequest } from '@app/modules/list/list.router';
import Task from './task.model';

const router = Router();

export interface TaskRequest extends ListRequest {
  task?: Task;
}

router.param('id', async (req: TaskRequest, res, next, value) => {
  const task = await Task.findOne({
    where: {
      id: value,
      list: req.list,
    },
  });

  if (task) {
    req.task = task;
    return next();
  }

  res.status(404);
  return next(new Error('Task not found'));
});

router.get('/', async (req: ListRequest, res) => {
  const tasks = req.list.tasks;
  res.send(tasks);
});

router.get('/:id', async (req: TaskRequest, res) => {
  res.send(req.task);
});

export default router;
