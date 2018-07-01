const config = require('./jest.common');

module.exports = {
  ...config,
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/__tests__/client/**/*.(spec|test).(js|jsx|ts|tsx)'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  collectCoverageFrom: [
    ...config.collectCoverageFrom,
    '!src/server/**/*',
  ],
  coverageDirectory: './coverage/client',
  setupTestFrameworkScriptFile: './src/__tests__/client/__setup.ts',
};
