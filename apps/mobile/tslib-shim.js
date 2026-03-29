const path = require('path');
// Use the absolute path to the real tslib at the workspace root to avoid recursion
const realTslibPath = path.resolve(__dirname, '../../node_modules/tslib/tslib.js');
const tslib = require(realTslibPath);

// Export all properties from the real tslib
module.exports = tslib;

// Also set default to the module itself for ESM interop
module.exports.default = tslib;
