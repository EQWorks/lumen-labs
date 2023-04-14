module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
    'import',
  ],
  rules: {
    'import/newline-after-import': ['error', { 'count': 2 }],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    indent: ['error', 2],
    'no-console': ['warn', { allow: ['error'] }],
    'no-trailing-spaces': ['error'],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { 'avoidEscape': true }],
    semi: ['error', 'never'],
  },
}
