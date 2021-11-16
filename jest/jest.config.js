module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/examples/$1",
    "^src/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.spec.ts',
    '<rootDir>/__tests__/**/*.spec.js'
  ],
  // 默认 transform
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.vue$": "vue3-jest",
  },
  // testEnvironment: 'jest-environment-jsdom',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testPathIgnorePatterns: ['/node_modules/']
}
