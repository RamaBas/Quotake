import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.test.(ts|tsx)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx)'
  ],

  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/.*/index.ts'
  ],

  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }]
  },

  transformIgnorePatterns: [
    'node_modules/(?!(@mui|react-markdown)/)'
  ],

  // Cobertura solo de archivos relevantes
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
    '!src/**/index.ts',
    '!src/setupTests.ts',
    '!src/main.tsx',
    '!src/App.tsx',
    '!src/contexts/**',
    '!src/i18n/**',
    '!src/routes/**',
    '!src/styles/**',
  ],

  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Lo añado para evitar error al importar animate en LoadingScreen
    '^@/(.*)$': '<rootDir>/src/$1',
  }
};

export default config;