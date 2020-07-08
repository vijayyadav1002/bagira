module.exports = {
  verbose: true,
  setupFiles: ["./setup-test.js"],
  testEnvironment: "node",
  globals: {
    "NODE_ENV": "test"
  },
  moduleFileExtensions: [
      'js',
      'jsx',
      'json'
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testURL: 'http://localhost/',
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageReporters: ["html", "text-summary"]
};