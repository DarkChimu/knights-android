module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended'
  ],
  rules: {
    'prettier/prettier': 0,
    'camelcase': 'off',
    'no-trailing-spaces': 'off',
    'strict': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'indent': 'off',
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'global-require': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { 'props': false }],
    'max-lines': 'off',
    'react/prop-types': [0],
    'react-native/no-inline-styles': 'off'
  },
  globals: {
    'use': true
  },
  parserOptions: {
    'ecmaVersion': 2017,
    'ecmaFeatures': { 'experimentalObjectRestSpread': true },
    'parser': 'babel-eslint'
  }
}
