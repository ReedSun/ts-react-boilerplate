module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    webextensions: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'typescript-sort-keys'],
  rules: {
    'max-lines': ['error', { skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['error', { skipBlankLines: true, skipComments: true }],
    'no-alert': 1,
    'no-console': 1,
    'no-debugger': 1,
    'no-else-return': 2,
    'object-shorthand': 2,
    'prefer-template': 2,
    'sort-imports': 2,
    'sort-keys': 2,
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
};
