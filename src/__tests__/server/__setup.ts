import { Connection } from 'typeorm';
import createConnection from '@server/database';

let connection: Connection;

beforeAll(async () => {
  if (!connection) {
    connection = await createConnection();
  }

  // Clear database before each test suite
  await connection.dropDatabase();
  await connection.runMigrations({ transaction: true });
});

afterAll(async () => {
  await connection.close();
  connection = null;
});
