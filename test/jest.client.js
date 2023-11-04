const getConfig = require('./jest-common');

module.exports = (async function () {
  const common = await getConfig();
  const config = {
    ...common,
    displayName: 'client',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/'],
    testMatch: [
      // '**/*.[jt]s?(x)',
      '**/src/**/*.test.[tj]s?(x)',
      '!**/src/**/*.server.test.[tj]s?(x)',
      '**/app/**/*.test.[tj]s?(x)',
      '!**/app/**/*.server.test.[tj]s?(x)',
      // '**/app/**/*.[jt]s?(x)',
      // '**/src/**/*.*|(\\.|/)(test|spec))\\.jsx?$',
      // '**/src/**/*.test.[tj]s?(x)',
    ],
  };

  return config;
})();
