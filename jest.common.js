module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.build.json',
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/$1',
    '@server/(.*)$': '<rootDir>/src/server/$1',
    '@client/(.*)$': '<rootDir>/src/client/$1',
    '@next/(.*)$': '<rootDir>/src/next/$1',
    '@tests/(.*)$': '<rootDir>/src/__tests__/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.ts',
    '!src/{bootstrap,next}/**/*',
    '!src/**/__tests__/**/*',
    '!src/**/*.d.ts',
  ],
  coverageReporters: ['lcov', 'json'],
};
