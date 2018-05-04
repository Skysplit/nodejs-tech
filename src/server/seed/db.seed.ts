import createConnection from '@server/database';
import User from '@server/module/user/user.model';

(async () => {
  const connection = await createConnection();

  const user = User.create({
    email: 'test@example.com',
    password: 'Secret99',
  });

  await user.save();

  await connection.close();
})();
