import { Express } from 'express';
import request from 'supertest';
import createApp from '@app/createApp';

describe('/', () => {
  let app: Express;

  beforeAll(async () => {
    app = await createApp();
  });

  describe('/#GET', () => {
    test('should show "hello world"', async () => {
      const body = await request(app).get('/').expect(200);
      expect(body.text).toEqual('Hello world');
    });
  });
});
