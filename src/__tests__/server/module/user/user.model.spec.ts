import User from '@server/module/user/user.model';

describe('User model', () => {
  describe('on update', () => {
    test('should refresh timestamp', async () => {
      const user = User.create({ email: 'test@example.com', password: 'test' });
      await user.save();

      const timestamp = user.updatedAt;
      user.email = 'other@example.com';
      await user.save();
      expect(timestamp).not.toEqual(user.updatedAt);
    });
  });
});
