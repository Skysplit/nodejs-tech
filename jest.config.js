module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.tsx?$': './node_modules/ts-jest/preprocessor.js',
  },
  testMatch: [
    '**/*.(test|spec).(ts|js)',
  ],
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**/*',
    '!src/{createApp,server,database,index}.ts',
    '!src/{bootstrap}/**/*',
    '!ormconfig.js',
  ],
  setupTestFrameworkScriptFile: './src/__tests__/__setup.ts'
}
