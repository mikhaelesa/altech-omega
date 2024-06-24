import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  preset: "ts-jest",
  displayName: "test-1",
  testMatch: ["<rootDir>/apps/test-1/__tests__/**/*.spec.ts"],
  rootDir: "../../",
};

export default config;
