const config = require('./jest.common');

module.exports = {
  ...config,
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/__tests__/server/**/*.(spec|test).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    ...config.collectCoverageFrom,
    '!src/server/index.ts',
    '!src/client/**/*',
  ],
  coverageDirectory: './coverage/server',
  setupTestFrameworkScriptFile: './src/__tests__/server/__setup.ts',
};
