import request from 'supertest';
import app from '../../src/app';

describe('/', () => {
  describe('GET /', () => {
    test('should show "hello world"', async () => {
      const body = await request(app).get('/').expect(200);
      expect(body.text).toEqual('Hello world');
    });
  });
});
