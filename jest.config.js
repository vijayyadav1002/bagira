module.exports = {
  verbose: true,
  testEnvironment: "node",
  globals: {
    "NODE_ENV": "test"
  },
  moduleFileExtensions: [
    'js',
    'json'
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testRegex: "/src/cli.test.js",
  testURL: 'http://localhost/',
  transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/templates"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
  coverageReporters: ["html", "text-summary"],
};