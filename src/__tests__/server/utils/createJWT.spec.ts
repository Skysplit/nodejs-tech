import createJWT from "@app/server/utils/createJWT";

jest.mock('@server/utils/appSecret', () => () => 'APP_SECRET');

describe('#createJWT', () => {
  test('should create JWT string', () => {
    expect(createJWT('TEST')).toEqual(expect.any(String));
  })
})
