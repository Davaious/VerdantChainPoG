module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      'src/**/*.{ts,js}',
      '!src/**/*.d.ts'
    ]
  };