import * as supertest from 'supertest';
import app from '../../src/app';

describe('/', () => {
  describe('GET /', () => {
    test('should show "hello world"', async () => {
      const body = await supertest(app).get('/').expect(200);
      expect(body.text).toEqual('Hello world');
    });
  });
});
