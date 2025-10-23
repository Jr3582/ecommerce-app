#!/usr/bin/env node
// Diagnostic script: require each schema file to locate syntax errors
require('ts-node').register({ transpileOnly: true });
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, '..', 'src', 'lib', 'db', 'schema');
const entries = fs.readdirSync(dir);
console.log('Scanning', dir);
for (const e of entries) {
  const full = path.join(dir, e);
  try {
    console.log('-> requiring', full);
    require(full);
    console.log('   OK');
  } catch (err) {
    console.error('   ERROR requiring', full);
    console.error(err && err.stack ? err.stack : err);
    process.exit(2);
  }
}
console.log('All required successfully');
