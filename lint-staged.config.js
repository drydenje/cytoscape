// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    // should probably be using the nextjs linter setup(?), but it's not working on when you run it on this file
    // going to look over other setups, might have another option other than lint-staged
    // `npm rum lint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
}

//     `npm run lint --fix ${filenames.join(' ')}`,
//     `npx prettier --write ${filenames.join(' ')}`,
//   ],

//   // format markdown and json
//   '**/*.(md|json)': (filenames) =>
//     `npx prettier --write ${filenames.join(' ')}`,
// }
