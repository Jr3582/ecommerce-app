// register ts-node so TypeScript files can be imported from CJS
require('ts-node').register({ transpileOnly: true });
const { defineConfig } = require('drizzle-kit');
require('dotenv').config({ path: '.env.local' });

module.exports = defineConfig({
  // use a CJS bridge which registers ts-node and requires the TS index
  schema: './schema-bridge.cjs',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
