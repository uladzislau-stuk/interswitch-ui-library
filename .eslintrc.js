module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-typescript',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-indent': ['error', 'tab'],
    'react/jsx-indent-props': ['error', 'tab'],
    'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
    'react/prop-types': 'off', // turned off because prop-types are not used
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 2,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off', // turned off because some components require named export
    '@typescript-eslint/no-use-before-define': 'off', // turned off to put StyleSheet at the end of the file
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'never'],
    'no-unused-vars': 'off', // to avoid conflicts with @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-unused-vars': ['error', {
      'varsIgnorePattern': '^[A-Z]' // prevents from displaying error after React declaration
    }],
    'indent': 'off', // to avoid conflicts with @typescript-eslint/indent
    '@typescript-eslint/indent': ['error', 'tab'],
    'semi': 'off', // to avoid conflicts with @typescript-eslint/semi
    '@typescript-eslint/semi': ['error', 'never'],
    'max-len': ['error', {
      'code': 80,
      'tabWidth': 4, // tabWidth for prettier
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true
    }],
    'prefer-template': 'off',
    'implicit-arrow-linebreak':'off', // turned off because line length can exceed max length without break
    'object-curly-newline': ['error', { 'consistent': true }]
  }
}
