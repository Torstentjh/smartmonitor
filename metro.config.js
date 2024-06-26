const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
        assetExts: ['glb', 'gltf', 'png', 'jpg'],
    }
};
//声明上面的内容，以使用useLoader或者Drei的一些模块
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
