const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withTM = require("next-transpile-modules")(["break-ui", "break-utils"]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["break-ui", "break-utils"],
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