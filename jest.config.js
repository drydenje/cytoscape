const getCommon = require('./test/jest-common');

module.exports = (async function () {
  const common = await getCommon();
  const config = {
    ...common,
    collectCoverageFrom: [
      '**/src/**/*.{js,jsx,ts,tsx}',
      '**/app/**/*.{js,jsx,ts,tsx}',
    ],
    coverageThreshold: {
      // setting global thresholds to warn when code coverage starts to regress
      global: {
        statements: 42,
        branches: 23,
        lines: 41,
        functions: 38,
      },
      // we can set thresholds on individual files
      './src/navigation/index.ts': {
        statements: 0,
        branches: 80,
        functions: 100,
        lines: 0,
      },
    },
    projects: [
      './test/jest.lint.js',
      './test/jest.client.js',
      './test/jest.server.js',
    ],
  };

  return config;
})();
