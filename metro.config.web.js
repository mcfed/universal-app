/**
 * This cli config is needed for development purposes, e.g. for running
 * integration tests during local development or on CI services.
 */

const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const rnmPath = path.resolve(__dirname, 'node_modules/react-native-web');

module.exports = {
  resolver: {
    extraNodeModules: {
      'react-native': rnmPath,
    },
    platforms: ['macos', 'ios', 'android','web','client'],
    blacklistRE: blacklist([/node_modules\/react-native\/.*/]),
  },
  serializer: {
    getModulesRunBeforeMainModule: () => [],
    getPolyfills: () => []
  },
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
    // assetRegistryPath: _path().default.join(ctx.reactNativePath, 'Libraries/Image/AssetRegistry')
  },
};
