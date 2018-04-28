import faker from 'faker';
import { times } from 'lodash';
import createConnection from '@app/database';
import { List } from '@app/modules/list';
import { Task } from '@app/modules/list/task';

(async () => {
  await createConnection();

  const generateTasks = (num: number, list: List) => times(num, () => Task.create({
    list,
    name: faker.name.findName(),
    done: faker.random.boolean(),
  }));

  times(5, async () => {
    const list = await List.create({
      name: faker.name.findName(),
    });
    await list.save();

    const tasks = generateTasks(5, list);
    await Task.save(tasks);

    return list;
  });
})();
