const path = require('path');
const getConfig = require('./jest-common');

module.exports = (async function () {
  const common = await getConfig();
  const config = {
    ...common,
    displayName: 'server',
    coverageDirectory: path.join(__dirname, '../coverage/server'),
    testEnvironment: 'jest-environment-node',
    testMatch: [
      '**/src/**/*.server.test.[tj]s?(x)',
      // '**/test/**/*.server.test.[tj]s?(x)',
      '**/app/**/*.server.test.[tj]s?(x)',
      // '!**/src/**/*.test.[tj]s?(x)',
      // '!**/app/**/*.test.[tj]s?(x)',
    ],
  };
  // console.log(config);
  return config;
})();
