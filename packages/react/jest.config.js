/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  moduleNameMapper: {
    "^lodash-es/merge$": "lodash/merge",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};
