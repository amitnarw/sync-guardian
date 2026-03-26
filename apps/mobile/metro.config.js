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

// 3. Enable Package Exports for better ESM/CJS interop in web bundles
config.resolver.unstable_enablePackageExports = true;

// 4. Force tslib resolution to the root nodeModules to avoid version conflicts
config.resolver.extraNodeModules = {
  tslib: path.resolve(workspaceRoot, 'node_modules/tslib'),
};

module.exports = withNativeWind(config, { input: './global.css' });
