const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack'); // Explicitly import webpack

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      // Define environment variables for Expo Router
      EXPO_ROUTER_APP_ROOT: './app',
    },
    argv
  );
  
  // Ensure process.env.EXPO_ROUTER_APP_ROOT is available
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({ // Use the imported webpack instead of config.webpack
      'process.env.EXPO_ROUTER_APP_ROOT': JSON.stringify('./app'),
    }),
  ];
  
  return config;
};
