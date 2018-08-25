const { withPlugins } = require('next-compose-plugins');
const progressbar = require('next-progressbar');
const typescript = require('@zeit/next-typescript');
const sourceMaps = require('@zeit/next-source-maps');
const bundleAnalyzer = require('@zeit/next-bundle-analyzer');
const TSConfigPaths = require('tsconfig-paths-webpack-plugin');

const { BUNDLE_ANALYZE } = process.env;

const nextPlugins = [
  [sourceMaps],
  [typescript, {
    webpack(config) {
      Object.assign(config.resolve, {
        plugins: (config.resolve.plugins || []),
      });

      config.resolve.plugins.push(new TSConfigPaths());

      return config;
    }
  }],
  [bundleAnalyzer, {
    analyzeServer: ["both", "server"].includes(BUNDLE_ANALYZE),
    analyzeBrowser: ["both", "browser"].includes(BUNDLE_ANALYZE),
  }],
  [progressbar],
];

const nextConfig = {
  distDir: '../../dist/client',
  useFileSystemPublicRoutes: false
};

module.exports = withPlugins(nextPlugins, nextConfig);

