import createConnection from '@app/database';
// import faker from 'faker';
// import { times } from 'lodash';
// import List from '@app/module/list/list.model';
// import Task from '@app/module/list/task/task.model';
import User from '@app/module/user/user.model';

(async () => {
  const connection = await createConnection();

  // const generateTasks = (num: number) => times(num, () => Task.create({
  //   name: faker.name.findName(),
  //   done: faker.random.boolean(),
  // }));

  // const lists = times(5, () => List.create({
  //   name: faker.name.findName(),
  //   tasks: generateTasks(5),
  // }));

  const user = User.create({
    email: 'test@example.com',
    password: 'Secret99',
  });

  // await List.save(lists);
  await user.save();

  await connection.close();
})();
