const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "@atoms/(.*)": "<rootDir>/src/components/atoms/$1",
  },
};
module.exports = createJestConfig(customJestConfig);
