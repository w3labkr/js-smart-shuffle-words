const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@css': path.resolve(__dirname, 'src/assets/css'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@locales': path.resolve(__dirname, 'src/locales'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@resources': path.resolve(__dirname, 'src/resources'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@atoms': path.resolve(__dirname, 'src/store/atoms'),
      '@selectors': path.resolve(__dirname, 'src/store/selectors'),
      '@templates': path.resolve(__dirname, 'src/templates'),
    },
  },
};
