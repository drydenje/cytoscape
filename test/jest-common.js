const nextJest = require('next/jest');
const path = require('path');
const rootD = path.join(__dirname, '..');
require('dotenv').config();

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
// const createJestConfig = nextJest({ dir: './' });
const createJestConfig = nextJest({ dir: rootD });

// Any custom config you want to pass to Jest
const customJestConfig = {
  rootDir: path.join(__dirname, '..'),
  roots: ['<rootDir>/src/'],
  // jest will resolve anything in these folders as node modules
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    // path.join(__dirname, '../app'),
    path.join(__dirname),
  ],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
