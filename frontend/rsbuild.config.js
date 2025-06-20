const path = require('path');

module.exports = {
  server: {
    port: 3000,
  },
  source: {
    entry: {
      index: './src/index.js',
    },
  },
  output: {
    distPath: {
      root: 'dist',
    },
  },
  plugins: [
    ['rsbuild-plugin-react-refresh', {}],
  ],
};
