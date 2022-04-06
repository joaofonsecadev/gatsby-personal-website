module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: { project: './tsconfig.json' },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-anonymous-exports-page-templates': 'warn',
    'object-curly-newline' : 'warn',
    'import/prefer-default-export' : 'warn',
    'limited-exports-page-templates': 'warn',
    'react/function-component-definition': 'off',
    'react/prop-types': 'warn',
    'react/jsx-one-expression-per-line': 'off',
  },
  ignorePatterns: ['gatsby-browser.js'],
};
