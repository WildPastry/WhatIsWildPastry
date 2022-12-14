import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }]
  }
};

export default config;
