const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Monorepo Watch Folders
config.watchFolders = [workspaceRoot];

// 2. Resolver Paths
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

config.resolver.disableHierarchicalLookup = false;

// 3. Disable Package Exports to avoid tslib ESM/CJS interop issues in web bundles
config.resolver.unstable_enablePackageExports = false;

// 4. Force tslib resolution to the shim to avoid version conflicts and fix ESM/CJS interop
config.resolver.extraNodeModules = {
  tslib: path.resolve(projectRoot, 'tslib-shim.js'),
};

module.exports = withNativeWind(config, { input: './global.css' });
