import appSecret from "@app/server/utils/appSecret";

describe('#appSecret', () => {
  beforeAll(() => {
    process.env.APP_SECRET = 'APP_SECRET';
  })

  afterAll(() => {
    process.env.APP_SECRET = undefined;
  })

  test('should return application secret key', () => {
    expect(appSecret()).toEqual('APP_SECRET');
  })
})
