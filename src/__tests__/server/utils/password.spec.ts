import { hashPassword, verifyPassword } from '@app/server/utils/password';

describe('#password', () => {
  const rounds = 10;

  describe('#hashPassword', () => {
    test('should create password hash', async () => {
      expect(await hashPassword('test', rounds)).toEqual(expect.any(String));
    });
  });

  describe('#verifyPassword', () => {
    test('should check if password matches hash', async () => {
      const password = 'testPassword';
      const hash = await hashPassword(password, rounds);

      expect(await verifyPassword(password, hash)).toEqual(true);
      expect(await verifyPassword('other', hash)).toEqual(false);
    });
  });
});
