module.exports = {
  // Lint & prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `next lint --fix --file ${filenames.join(' --file ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
