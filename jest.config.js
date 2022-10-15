module.exports = async () => {
  return {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/node_modules/']
  }
}
