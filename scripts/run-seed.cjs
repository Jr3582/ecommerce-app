// Register ts-node so we can require TypeScript files from CJS
require('ts-node').register({ transpileOnly: true });
// load tsconfig paths so the "@/" alias resolves
require('tsconfig-paths/register');
require('../src/lib/db/seed.ts');
