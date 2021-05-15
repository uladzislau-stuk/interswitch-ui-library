module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.json', 'ts', 'tsx'],
        alias: {
          'assets': './src/assets',
          'components': './src/components',
          'screens': './src/screens/',
          'hooks': './src/hooks',
          'navigation': './src/navigation',
          'solutions': './src/solutions',
          'styles': './src/styles',
          'utils': './src/utils/',
        },
      },
    ],
  ],
};
