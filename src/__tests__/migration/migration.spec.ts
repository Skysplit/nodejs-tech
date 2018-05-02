import { getConnection } from 'typeorm';

describe('Migration', () => {
  test('should successfully migrate and revert', async () => {
    expect.hasAssertions();

    const migration = async () => {
      const connection = getConnection();
      await connection.undoLastMigration({ transaction: true });
      await connection.runMigrations({ transaction: true });
    };

    await expect(migration()).resolves.not.toThrowError();
  });
});
