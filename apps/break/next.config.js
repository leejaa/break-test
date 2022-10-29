const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withTM = require("next-transpile-modules")(["break-ui"]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["break-ui"],
  },
  webpack(config, options) {
    const { dev, isServer } = options;
    if (dev) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin()
      );
    }
    return config;
  },
});