import isProduction from "@app/server/utils/isProduction";

describe('#isProduction', () => {
  describe('when running in production environment', () => {
    let currentEnv: string;

    beforeAll(() => {
      currentEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';
    })

    afterAll(() => {
      process.env.NODE_ENV = currentEnv;
    })

    test('should return true', () => {
      expect(isProduction()).toEqual(true)
    })

  })

  describe('when running in non-production environment', () => {
    let currentEnv: string;

    beforeAll(() => {
      currentEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'non-production';
    })

    afterAll(() => {
      process.env.NODE_ENV = currentEnv;
    })

    test('should return false', () => {
      expect(isProduction()).toEqual(false);
    })
  })

})
