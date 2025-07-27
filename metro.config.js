const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

// Set EXPO_ROUTER_APP_ROOT for web builds
process.env.EXPO_ROUTER_APP_ROOT = process.env.EXPO_ROUTER_APP_ROOT || './app';

// Make sure we're using the proper @expo/metro-config extension
const defaultConfig = getDefaultConfig(__dirname);
const config = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    platforms: ['ios', 'android', 'native', 'web'],
    extraNodeModules: {
      '@': path.resolve(__dirname, '.'),
    },
    sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs', 'svg'],
    assetExts: [...defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'), 'db', 'sqlite'],
  },
  transformer: {
    ...defaultConfig.transformer,
    minifierPath: require.resolve('metro-minify-terser'),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  server: {
    ...defaultConfig.server,
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        // Set environment variables for web builds
        process.env.EXPO_ROUTER_APP_ROOT = process.env.EXPO_ROUTER_APP_ROOT || './app';
        return middleware(req, res, next);
      };
    },
  },
};
module.exports = config;