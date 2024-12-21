module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(react-router-dom)/)"],

  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
    "^react$": "<rootDir>/node_modules/react",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
