import request from 'supertest';
import app from '../../src/app';

describe('/sample', () => {
  describe('GET /', () => {
    test('should respond with "Sample route"', async () => {
      const body = await request(app).get('/sample').expect(200);
      expect(body.status).toEqual(200);
      expect(body.text).toEqual('Sample route');
    });
  });

  describe('POST /', () => {
    test('should respond with capitalised greeting', async () => {
      const body = await request(app).post('/sample').send({ greeting: 'hello world' }).expect(200);
      expect(body.text).toEqual('Hello world');
    });
  });
});
