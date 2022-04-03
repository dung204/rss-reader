const webpack = require('webpack');
module.exports = function override(config, env) {
  config.resolve.fallback = {
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    buffer: require.resolve('buffer'),
    timers: require.resolve('timers-browserify'),
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
