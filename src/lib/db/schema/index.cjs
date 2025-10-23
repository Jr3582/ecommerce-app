// CommonJS bridge that requires all TypeScript schema files.
require('ts-node').register({ transpileOnly: true });
const path = require('path');

// list files explicitly to avoid dynamic ESM resolution
const schemas = [
  'users',
  'session',
  'account',
  'verification',
  'guest',
  'brands',
  'categories',
  'filters/genders',
  'filters/colors',
  'filters/sizes',
  'products',
  'variants',
  'images',
  'reviews',
  'collections',
  'productCollections',
  'addresses',
  'carts',
  'orders',
];

for (const s of schemas) {
  const mod = require(path.join(__dirname, s + '.ts'));
  // copy named exports (tables, types) onto module.exports
  Object.keys(mod).forEach((k) => {
    if (!(k in module.exports)) module.exports[k] = mod[k];
  });
}

// also export everything under the default index.ts if present
try {
  const idx = require(path.join(__dirname, 'index.ts'));
  Object.keys(idx).forEach((k) => {
    if (!(k in module.exports)) module.exports[k] = idx[k];
  });
} catch (e) {
  // ignore
}

module.exports.__esModule = true;
