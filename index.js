#!/usr/bin/env node

const fs = require('fs');
var path = require('path');
const unzipper = require('unzipper');
let args = process.argv.slice(2);
console.log(args);
let appName = args[0];
let dir = path.dirname(process.argv[1]);
console.log(dir);
console.log(process.cwd);
fs.createReadStream(`./Archive.zip`)
  .pipe(unzipper.Extract({ path: path.join(dir, appName) }));
