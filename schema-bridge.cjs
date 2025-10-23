// small CommonJS bridge used by drizzle config to load TypeScript schema files
// registers ts-node so requiring .ts will work in this CJS module
// require the CommonJS schema index which itself requires the TypeScript files via ts-node
module.exports = require('./src/lib/db/schema/index.cjs');
